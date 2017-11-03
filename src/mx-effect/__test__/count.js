define("mx-effect/__test__/count",["magix","../../mx-form/index","../count"],function(t,e,n){t("../count");var i=t("magix"),u=t("../../mx-form/index");n.exports=i.View.extend({tmpl:{html:'<h2>mx-effect count</h2><div class="_B _ah"><input mx-guid="g0" class="_ao" mx-view="mx-effect/count?to=<%!$eu($$.toNumber)%>"><div mx-guid="g1" mx-view="mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2" style="font-size: 30px;line-height: 50px;letter-spacing: 2px"></div><button class="_am _an _s" type="button" mx-click="changeNumber({i:true})">increase number</button><button class="_am _an _s" type="button" mx-click="changeNumber()">decrease number</button></div><div class="_B"><div>HTML Code:</div><pre>\n&lt;input class="input" mx-view="mx-effect/count" view-to="&lt;%@toNumber%&gt;"&gt;\n&lt;div mx-view="mx-effect/count" view-to="&lt;%@toNumber%&gt;" view-duration="2000" view-fixed="2" style="font-size: 30px;line-height: 50px;letter-spacing: 2px;"&gt;&lt;/div&gt;\n&lt;button class="btn btn-brand ml5" type="button" mx-click="changeNumber({i:true})"&gt;increase number&lt;/button&gt;\n&lt;button class="btn btn-brand ml5" type="button" mx-click="changeNumber()"&gt;decrease number&lt;/button&gt;</pre><div class="_z">Javascript Code:</div><pre>\nlet Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            toNumber: 20\n        });\n    },\n    \'changeNumber&lt;click&gt;\'(e) {\n        let me = this;\n        let to = me.updater.get(\'toNumber\');\n        let diff = 300;\n        if (!e.params.i) {\n            diff = -diff;\n        }\n        me.updater.digest({\n            toNumber: to + diff\n        });\n    }\n});</pre></div>',subs:[{keys:["toNumber"],path:'input[mx-guid="g0"]',attr:'mx-view="mx-effect/count?to=<%!$eu($$.toNumber)%>"',attrs:[{n:"mx-view",v:1}]},{keys:["toNumber"],path:'div[mx-guid="g1"]',attr:'mx-view="mx-effect/count?to=<%@$$.toNumber%>&duration=2000&fixed=2"',attrs:[{n:"mx-view",v:1}]}]},mixins:[u],render:function(){this.updater.digest({toNumber:20,content:"你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。你从远处聆听我，我的声音却无法触及你。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。好像你的双眼已经飞离去，如同一个吻，封缄了你的嘴。如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，如同所有的事物充满了我的灵魂，你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。你从所有的事物中浮现，充满了我的灵魂。",dance:"d1",duration:"60"})},"changeNumber<click>":function(t){var e=this,n=e.updater.get("toNumber"),i=300;t.params.i||(i=-i),e.updater.digest({toNumber:n+i})}})});