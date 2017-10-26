/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-topbar/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("I",".fu{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:#d45414;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);-webkit-transition:all .3s ease;transition:all .3s ease}");
var barId = Magix.guid('mx_topbar_');
var Vframe = Magix.Vframe;
var timer, interval;
var percent = 100;
var Topbar = {
    '_e': function () {
        clearTimeout(timer);
        var bar = $('#' + barId);
        if (!bar.length) {
            $('body').append("<div class=\"fu\" id=\"" + barId + "\"></div>");
            interval = setInterval(Topbar['_fa'], 300);
        }
    },
    '_fb': function () {
        var bar = $('#' + barId);
        if (bar.length) {
            if (percent > 15) {
                percent -= (3 + Math.random() * 5);
            }
            else if (percent > 4) {
                percent -= (1 + Math.random());
            }
            bar.css({
                transform: "translate3d(-" + percent + "%,0px,0px)"
            });
        }
    },
    '_a': function () {
        clearInterval(interval);
        var bar = $('#' + barId);
        if (bar.length) {
            bar.css({
                transform: "translate3d(0,0px,0px)"
            });
            timer = setTimeout(function () {
                percent = 100;
                bar.remove();
            }, 400);
        }
    }
};
var rootId = Magix.config('rootId');
var rootVf = Vframe.get(rootId);
var resume = function (vf) {
    vf.on('alter', Topbar['_e']);
    vf.on('created', Topbar['_a']);
};
if (rootVf) {
    resume(rootVf);
}
else {
    Topbar['_e'](); //未准备好的情况下
    var watch_1 = function (e) {
        if (e.vframe.id == rootId) {
            Vframe.off('add', watch_1);
            resume(e.vframe);
        }
    };
    Vframe.on('add', watch_1);
}

});