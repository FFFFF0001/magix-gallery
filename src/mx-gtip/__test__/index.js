define("mx-gtip/__test__/index",["magix","mx-gtip/index"],function(t,i,n){var l=t("magix"),c=t("mx-gtip/index");n.exports=l.View.extend({tmpl:{html:'<h2>mx-gtip</h2><div class="_B _ah"><button class="_am _a_" mx-click="rt()">右上角提示</button><button class="_am _a_ _t" mx-click="rb()">右下角提示</button><button class="_am _a_ _t" mx-click="lt();">左上角提示</button><button class="_am _a_ _t" mx-click="lb();">左下角提示</button></div><div class="_B"><div>HTML Code:</div><pre>&lt;button class="btn fl" mx-click="rt()"&gt;右上角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="rb()"&gt;右下角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="lt();"&gt;左上角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="lb();"&gt;左下角提示&lt;/button&gt;</pre><div class="_z">Javascript Code:</div><pre>\nlet Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'rt&lt;click&gt;\' () {\n        this.gtipRT(\'右上角，消息内容\' + Date.now());\n    },\n    \'rb&lt;click&gt;\' () {\n        this.gtipRB(\'右下角，消息内容\' + Date.now());\n    },\n    \'lt&lt;click&gt;\' () {\n        this.gtipLT(\'左上角，消息内容\' + Date.now());\n    },\n    \'lb&lt;click&gt;\' () {\n        this.gtipLB(\'左下角，消息内容\' + Date.now());\n    },\n    \'rtt&lt;click&gt;\' (e) {\n        this.gtipRT(\'右上角，消息内容\' + Date.now(), e.params.s * 1000);\n    }\n});</pre></div>',subs:[]},mixins:[c],render:function(){this.updater.digest()},"rt<click>":function(){this.gtipRT("右上角，消息内容"+Date.now())},"rb<click>":function(){this.gtipRB("右下角，消息内容"+Date.now())},"lt<click>":function(){this.gtipLT("左上角，消息内容"+Date.now())},"lb<click>":function(){this.gtipLB("左下角，消息内容"+Date.now())},"rtt<click>":function(t){this.gtipRT("右上角，消息内容"+Date.now(),1e3*t.params.s)}})});