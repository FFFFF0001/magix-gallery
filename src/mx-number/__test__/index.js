define("mx-number/__test__/index",["magix","mx-gtip/index","../index"],function(e,i,n){e("../index");var d=e("magix"),t=e("mx-gtip/index");n.exports=d.View.extend({tmpl:{html:'<h2>mx-number</h2><h3>默认情形</h3><div class="_B _ah"><div mx-view="mx-number/index"></div><br>下面这个是原生的number，用以对比<br><input type="number" class="_ao"><div style="color:#aaa">mx-number比原生多了按着shift键的变化比率，这个变化比率是可配置的<br>原生可以输入多个点小数点“.”和多个科学计数法“e”，而只有合法的数字才能取出值，否则会取到空字符串</div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-number /&gt;</pre></div><h3 class="_f">最大值、最小值及step</h3><div class="_B _ah"><div mx-view="mx-number/index?max=10&min=-10&step=0.5&ratio=4&value=8.5"></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-number\n    max="10"\n    min="-10"\n    step="0.5"\n    value="8.5" /&gt;</pre></div><h3 class="_f">禁用</h3><div class="_B _ah"><div mx-view="mx-number/index?disabled=true&value=20"></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-number disabled="true" value="20" /&gt;</pre></div><h3 class="_f">响应事件</h3><div class="_B _ah"><div mx-change="show()" mx-view="mx-number/index?max=10&min=-10&step=0.5&value=8.5"></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-number\n    max="10"\n    min="-10"\n    step="0.5"\n    value="8.5"\n    mx-change="show()" /&gt;</pre><div class="_z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'show&lt;change&gt;\' (e) {\n        this.gtipRT(\'当前值：\' + e.eventTarget.value);\n    }\n});</pre></div>',subs:[]},mixins:[t],render:function(){this.updater.digest()},"show<change>":function(e){this.gtipRT("当前值："+e.eventTarget.value)}})});