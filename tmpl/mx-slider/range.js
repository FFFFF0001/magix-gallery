/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
'ref@./style.less';
let Magix = require('magix');
let $ = require('$');
let DD = require('../mx-dragdrop/index');
require('./style');
module.exports = Magix.View.extend({
    tmpl: '@range.html',
    init(extra) {
        let me = this;
        let oNode = $('#' + me.id);
        oNode.addClass('@style.less:as-input');
        me.assign(extra);
        let click = (e) => {
            if (me['@{temp.hold.event}'] || me['@{disabled}']) return;
            let offset = oNode.offset();
            let vars = me['@{get.ui.vars}']();
            let pos = -1;
            if (me['@{vertical}']) {
                pos = vars.rMax - e.pageY + offset.top;
            } else {
                pos = e.pageX - offset.left;
            }
            let p = (pos - vars.half) / vars.max;
            let v = me['@{get.fixed.value}'](p);
            let start = +me['@{start}'];
            let end = +me['@{end}'];
            let syncLeft = Math.abs(start - v) < Math.abs(end - v);
            if (syncLeft) {
                me['@{sync.left}'](v);
                me['@{start}'] = v;
                me['@{fire.event}']();
            } else {
                me['@{sync.right}'](v);
                me['@{end}'] = v;
                me['@{fire.event}']();
            }
        };
        oNode.on('click', click);
        me.on('destroy', () => {
            oNode.off('click', click);
        });
        me['@{owner.node}'] = oNode;
    },
    assign(ops) {
        let me = this;
        me['@{width}'] = +ops.width || 340;
        me['@{height}'] = +ops.height || 340;
        me['@{min}'] = +ops.min || 0;
        me['@{max}'] = +ops.max || 100;
        me['@{step}'] = +ops.step || 1;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{vertical}'] = (ops.vertical + '') === 'true';
        let s = me['@{step}'] + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        let value = ops.value;
        if (value) {
            value = (value + '').split(',');
            me['@{start}'] = +value[0] || 0;
            me['@{end}'] = +value[1] || 0;
        } else {
            me['@{start}'] = 0;
            me['@{end}'] = 0;
        }
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            min: me['@{min}'].toFixed(me['@{tail.length}']),
            max: me['@{max}'].toFixed(me['@{tail.length}']),
            viewId: me.id,
            height: me['@{height}'],
            width: me['@{width}'],
            vertical: me['@{vertical}']
        });
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('@style.less:notallowed');
        me.val([me['@{start}'], me['@{end}']]);
    },
    '@{get.ui.vars}'() {
        let me = this;
        let rail = me['@{owner.node}'].find('.@style.less:rail');
        let tracker = me['@{owner.node}'].find('.@style.less:tracker');
        let iLeft = $('#left_' + me.id);
        let iRight = $('#right_' + me.id);
        let rMax = me['@{vertical}'] ? rail.height() : rail.width();
        let half = iLeft.outerWidth() / 2;
        let max = rMax - half * 2;
        return {
            rail,
            iLeftL: $('#leftl_' + me.id),
            iRightL: $('#rightl_' + me.id),
            tracker,
            iLeft,
            iRight,
            left: parseInt(iLeft.css(me['@{vertical}'] ? 'bottom' : 'left'), 10),
            right: parseInt(iRight.css(me['@{vertical}'] ? 'bottom' : 'left'), 10),
            rMax,
            max,
            half
        };
    },
    '@{sync.left}'(v) {
        let me = this;
        v = +v;
        let max = me['@{max}'],
            min = me['@{min}'];
        if (v > max) v = max;
        else if (v < min) v = min;
        let leftPercent = (v - min) / (max - min);
        let vars = me['@{get.ui.vars}']();
        let pos = leftPercent * vars.max;
        if (me['@{vertical}']) {
            vars.iLeft.css({
                bottom: pos
            });
        } else {
            vars.iLeft.css({
                left: pos
            });
        }

        v = me['@{get.fixed.value}'](leftPercent);
        let node = vars.iLeftL;
        node.html(v);
        let l = pos + vars.half;
        if (me['@{vertical}']) {
            let pHalf = node.height() / 2;
            l -= pHalf;
            node.css({
                bottom: l
            });
            vars.tracker.css({
                bottom: pos + vars.half
            }).height(vars.right - pos);
        } else {
            let pHalf = node.width() / 2;
            if (l < pHalf) {
                l = 0;
            } else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            } else {
                l -= pHalf;
            }
            node.css({
                left: l
            });
            vars.tracker.css({
                left: pos + vars.half
            }).width(vars.right - pos);
        }
        return v;
    },
    '@{sync.right}'(v) {
        let me = this;
        v = +v;
        let max = me['@{max}'],
            min = me['@{min}'];
        if (v > max) v = max;
        else if (v < min) v = min;
        let rightPercent = (v - min) / (max - min);
        let vars = me['@{get.ui.vars}']();
        let pos = rightPercent * vars.max;
        if (me['@{vertical}']) {
            vars.iRight.css({
                bottom: pos
            });
        } else {
            vars.iRight.css({
                left: pos
            });
        }
        v = me['@{get.fixed.value}'](rightPercent);
        let node = vars.iRightL;
        node.html(v);
        let l = pos + vars.half;
        if (me['@{vertical}']) {
            let pHalf = node.height() / 2;
            l -= pHalf;
            node.css({
                bottom: l
            });
            vars.tracker.height(pos - vars.left);
        } else {
            let pHalf = node.width() / 2;
            if (l < pHalf) {
                l = 0;
            } else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            } else {
                l -= pHalf;
            }
            node.css({
                left: l
            });
            vars.tracker.width(pos - vars.left);
        }
        return v;
    },
    val(v) {
        let me = this;
        if (v) {
            let av = (v + '').split(',');
            let start = +av[0] || 0;
            let end = +av[1] || 0;
            if (start > end) {
                [start, end] = [end, start];
            }
            me['@{owner.node}'].prop('value', [start, end]);
            start = me['@{sync.left}'](start);
            end = me['@{sync.right}'](end);
            if (me['@{start}'] != start || me['@{end}'] != end) {
                me['@{start}'] = start;
                me['@{end}'] = end;
                me['@{fire.event}']();
            }
        }
        return [+me['@{start}'], +me['@{end}']];
    },
    '@{get.fixed.value}'(p) {
        let me = this;
        let max = me['@{max}'],
            min = me['@{min}'],
            step = me['@{step}'],
            v;
        if (p === 0) v = min;
        else if (p === 1) v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me['@{tail.length}']);
        return v;
    },
    '@{fire.event}'() {
        let me = this;
        let value = [+me['@{start}'], +me['@{end}']];
        this['@{owner.node}'].prop('value', value).trigger({
            type: 'change',
            value: value,
            start: +me['@{start}'],
            end: +me['@{end}']
        });
    },
    '@{drag}<mousedown>'(e) {
        e.stopPropagation();
        e.preventDefault();
        let me = this;
        if (me['@{disabled}']) return;
        let current = $(e.eventTarget);
        let size = current.outerWidth();
        let min = 0; //最小
        let max = -1;
        if (me['@{vertical}']) {
            max = current.parent().height() - size;
        } else {
            max = current.parent().width() - size;
        }
        let currentValue = parseInt(current.css(me['@{vertical}'] ? 'bottom' : 'left'), 10);
        let dragStartValue = me['@{start}'];
        let dragEndValue = me['@{end}'];
        DD.begin(e.eventTarget, (ex) => {
            DD.clear();
            let newValue = -1;
            if (me['@{vertical}']) {
                newValue = currentValue + e.pageY - ex.pageY;
            } else {
                newValue = currentValue + ex.pageX - e.pageX;
            }
            if (newValue < min) newValue = min;
            else if (newValue > max) newValue = max;
            let p = newValue / max;
            let v = me['@{get.fixed.value}'](p);
            let nv = +v;
            if (e.params.end) {
                let start = +me['@{start}'];
                if (nv >= start) {
                    if (me['@{start}'] != dragStartValue) {
                        dragStartValue = me['@{sync.left}'](start);
                    }
                    dragEndValue = me['@{sync.right}'](v);
                } else {
                    if (me['@{start}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](start);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                }
            } else {
                let end = +me['@{end}'];
                if (nv <= end) {
                    if (me['@{end}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](end);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                } else {
                    if (me['@{end}'] != dragStartValue) {
                        dragStartValue = me['@{sync.left}'](end);
                    }
                    dragEndValue = me['@{sync.right}'](v);
                }
            }
        }, () => {
            if (dragStartValue != me['@{start}'] || me['@{end}'] != dragEndValue) {
                me['@{start}'] = dragStartValue;
                me['@{end}'] = dragEndValue;
                me['@{fire.event}']();
            }
            me['@{temp.hold.event}'] = true;
            setTimeout(me.wrapAsync(() => {
                delete me['@{temp.hold.event}'];
            }), 20);
        });
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});