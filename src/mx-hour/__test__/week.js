define("mx-hour/__test__/week",["magix","../week"],function(e,i,h){e("../week");var s=e("magix");h.exports=s.View.extend({tmpl:{html:'<h2>mx-hour</h2><h3 class="_f">周小时选取组件</h3><div class="_B _ah"><div mx-change="show()" style="width:800px" mx-view="mx-hour/week?days=%2C001111%2C%2C%2C00000000111111001"></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-hour.week\n    days=",001111,,,00000000111111001"\n    mx-change="show()"\n    style="width:800px"/&gt;</pre></div>',subs:[]},render:function(){this.updater.digest()},"show<change>":function(e){}})});