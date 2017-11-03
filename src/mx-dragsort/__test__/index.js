define("mx-dragsort/__test__/index",["magix","../index"],function(t,l,a){t("../index");var n=t("magix");n.applyStyle("_d","._aM{width:300px;cursor:default}._aM li{line-height:30px;padding:10px}._aM li:nth-child(odd){background-color:rgba(172,236,182,.5)}._aM span{cursor:move;margin-right:10px;display:inline-block;height:100%}._aN{background:#f8f6f6;height:120px;overflow:auto;width:200px}._aO,._aN{cursor:default}._aO{width:100%}._aO li{width:100px;height:60px;text-align:center;float:left;line-height:60px;background:#f8f6f6;border-right:1px solid #fff}._aO li[ds-draggable=false]{background:#ccc}"),a.exports=n.View.extend({tmpl:{html:'<h2>mx-dragsort</h2><h3>默认示例</h3><div class="_B _ah"><ul mx-view="mx-dragsort/index?selector=span" class="_aM _a_"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><div class="_aa"><table class="_az _aA"><thead><tr><th><input type="checkbox" class="_ar" linkage="example1"></th><%for(var a=0;a<3;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody mx-view="mx-dragsort/index"><%for(var b=0;b<10;b++){%><tr><td><input type="checkbox" class="_ar" linkage-parent="example1" value="ex1_<%=b%>"></td><%for(var c=0;c<3;c++){%><td><%=b%>示例字段内容<%=c%></td><%}%></tr><%}%></tbody></table></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left fl" view-selector="span"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;div class="fr"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody mx-view="app/gallery/mx-dragsort/index"&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;&lt;%=i%&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/div&gt;</pre></div><h3 class="_f">水平拖动</h3><div class="_B _ah"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=false" class="_aO _a_"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class="_B"><div>HTML Code:</div><pre>&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="false"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class="_f">四个方向</h3><div class="_B _ah"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=true" class="_aO _a_"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class="_B"><div>HTML Code:</div><pre>&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="true"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div><h3 class="_f">滚动容器和窗口</h3><h4>拖动的容器节点如果可以滚动，则会自动滚动，如果拖动靠近窗口，则会自动滚动窗口</h4><div class="_B _ah"><ul mx-view="mx-dragsort/index?selector=span" class="_aM _aN _a_ _aj"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><h3 class="_f">跨容器拖动</h3><div class="_B _ah"><ul mx-view="mx-dragsort/index?drops=_def&selector=span" class="_aM _aN _a_ _aj" id="_abc"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul><ul mx-view="mx-dragsort/index?selector=span&drops=_abc" class="_aM _aN _a_ _aj _x" id="_def"></ul></div><div class="_B"><div>HTML Code:</div><pre>&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left left1 fl scrollable" view-drops="_def" view-selector="span" id="_abc"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul mx-view="mx-dragsort/index" class="left left1 fl scrollable ml30" id="_def" view-selector="span" view-drops="_abc"&gt;\n&lt;/ul&gt;</pre></div><h3 class="_f">拖出容器删除</h3><div class="_B _ah"><ul mx-view="mx-dragsort/index?sort=false" class="_aM _aN _a_ _aj" mx-enterzone="stop()" mx-leavezone="ok()" mx-dragfinish="del()"><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li></ul></div><div class="_B"><div>HTML Code:</div><pre>&lt;ul mx-view="app/gallery/mx-dragsort/index" class="left left1 fl scrollable" mx-enterzone="stop()" mx-leavezone="ok()" mx-dragfinish="del()" view-sort="false"&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre><div class="_z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nMagix.applyStyle(\'@index.less\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'stop&lt;enterzone&gt;\'(e) {\n        e.changePointer(false);\n    },\n    \'ok&lt;leavezone&gt;\'(e) {\n        e.changePointer(true);\n    },\n    \'del&lt;dragfinish&gt;\'(e) {\n        if (e.moved && e.outZone) {//moved and outside zone\n            $(e.dragNode).slideUp();\n            setTimeout(() => {\n                e.dragZone.removeChild(e.dragNode);\n            }, 500);\n        }\n    }\n});</pre></div><h3 class="_f">部分不能拖动及排序</h3><div class="_B _ah"><ul mx-view="mx-dragsort/index?horizonal=true&vertical=false" class="_aO _a_"><li ds-draggable="false"><span>move</span>123</li><li ds-draggable="false"><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li><span>move</span>456</li><li><span>move</span>123</li><li ds-draggable="false"><span>move</span>456</li></ul></div><div class="_B"><div>HTML Code:</div><pre>&lt;ul mx-view="app/gallery/mx-dragsort/index" class="hor fl" view-horizonal="true" view-vertical="false"&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n    &lt;li&gt;&lt;span&gt;move&lt;/span&gt;123&lt;/li&gt;\n    &lt;li ds-draggable="false"&gt;&lt;span&gt;move&lt;/span&gt;456&lt;/li&gt;\n&lt;/ul&gt;</pre></div>',subs:[]},render:function(){this.updater.digest()},"stop<enterzone>":function(t){t.changePointer(!1)},"ok<leavezone>":function(t){t.changePointer(!0)},"del<dragfinish>":function(t){t.moved&&t.outZone&&($(t.dragNode).slideUp(),setTimeout(function(){t.dragZone.removeChild(t.dragNode)},500))},"start<dragstart>":function(t){t.originalEvent.dataTransfer.effectAllowed="none",t.originalEvent.dataTransfer.setDragImage(t.target,-10,-18)},"drop<drop>":function(t){$(t.eventTarget).css({borderColor:"#ccc"})},"enter<dragenter>":function(t){$(t.eventTarget).css({borderColor:"red"})},"leave<dragleave>":function(t){$(t.eventTarget).css({borderColor:"#ccc"})},"$doc<dragover>":function(t){t.preventDefault()}})});