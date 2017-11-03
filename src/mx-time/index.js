define("mx-time/index",["magix","$"],function(e,t,_){var n=e("magix"),i=e("$");n.applyStyle("_K","._fk{width:58px;float:left;overflow:hidden}._fl{font-size:30px;height:50px;text-align:center;margin-bottom:10px}._fm{width:28px;height:28px;padding:0}._fn{font-size:27px;float:left;line-height:32px;margin-top:8px;font-weight:bolder;display:inline-block;width:30px;text-align:center}");var s=function(e){if(!e){var t=new Date;e=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}var _=e.split(":");if(3!=_.length)throw new Error("bad time:"+e);return{__cn:parseInt(_[0],10)||0,__fE:parseInt(_[1],10)||0,__fF:parseInt(_[2],10)||0}},a=function(e){e||(e="all");var t={__cn:!0,__fE:!0,__fF:!0},_={hour:"__cn",minute:"__fE",second:"__fF"};if("all"!=e)for(var n in _)-1===e.indexOf(n)&&delete t[_[n]];return t},d=function(e){return e<10?"0"+e:e};_.exports=n.View.extend({tmpl:{html:'<div class="_fk"><input mx-guid="g0" class="_ao _fl" value="<%=$$.format($$.time[\'__cn\'])%>" <%if($$.types[\'__cn\']){%> mx-change="__fI({type:\'__cn\'})" <%}else{%> disabled<%}%> maxlength="2" mx-keydown="__dt({type:\'__cn\'})" autocomplete="off"><button mx-guid="g1" type="button" class="_am _fm _a_" <%if($$.types[\'__cn\']){%> mx-click="__fH({type:\'__cn\'})" mx-mousedown="__ds({type:\'__cn\'})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button mx-guid="g2" type="button" class="_am _fm _aa" <%if($$.types[\'__cn\']){%> mx-click="__fH({type:\'__cn\',inc:1})" mx-mousedown="__ds({type:\'__cn\',inc:1})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div><span class="_fn">:</span><div class="_fk"><input mx-guid="g3" class="_ao _fl" value="<%=$$.format($$.time[\'__fE\'])%>" <%if($$.types[\'__fE\']){%> mx-change="__fI({type:\'__fE\'})" <%}else{%> disabled<%}%> maxlength="2" mx-keydown="__dt({type:\'__fE\'})" autocomplete="off"><button mx-guid="g4" type="button" class="_am _fm _a_" <%if($$.types[\'__fE\']){%> mx-click="__fH({type:\'__fE\'})" mx-mousedown="__ds({type:\'__fE\'})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button mx-guid="g5" type="button" class="_am _fm _aa" <%if($$.types[\'__fE\']){%> mx-click="__fH({type:\'__fE\',inc:1})" mx-mousedown="__ds({type:\'__fE\',inc:1})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div><span class="_fn">:</span><div class="_fk"><input mx-guid="g6" class="_ao _fl" value="<%=$$.format($$.time[\'__fF\'])%>" <%if($$.types[\'__fF\']){%> mx-change="__fI({type:\'__fF\'})" <%}else{%> disabled<%}%> maxlength="2" mx-keydown="__dt({type:\'__fF\'})" autocomplete="off"><button mx-guid="g7" type="button" class="_am _fm _a_" <%if($$.types[\'__fF\']){%> mx-click="__fH({type:\'__fF\'})" mx-mousedown="__ds({type:\'__fF\'})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button mx-guid="g8" type="button" class="_am _fm _aa" <%if($$.types[\'__fF\']){%> mx-click="__fH({type:\'__fF\',inc:1})" mx-mousedown="__ds({type:\'__fF\',inc:1})" <%}else{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div>',subs:[{keys:["time","types"],path:'input[mx-guid="g0"]',attr:"value=\"<%=$$.format($$.time['__cn'])%>\" <%if($$.types['__cn']){%> mx-change=\"__fI({type:'__cn'})\" <%}else{%> disabled<%}%>",attrs:[{n:"value",q:1,p:1},{n:"mx-change"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g1"]',attr:"<%if($$.types['__cn']){%> mx-click=\"__fH({type:'__cn'})\" mx-mousedown=\"__ds({type:'__cn'})\" <%}else{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g2"]',attr:"<%if($$.types['__cn']){%> mx-click=\"__fH({type:'__cn',inc:1})\" mx-mousedown=\"__ds({type:'__cn',inc:1})\" <%}else{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["time","types"],path:'input[mx-guid="g3"]',attr:"value=\"<%=$$.format($$.time['__fE'])%>\" <%if($$.types['__fE']){%> mx-change=\"__fI({type:'__fE'})\" <%}else{%> disabled<%}%>",attrs:[{n:"value",q:1,p:1},{n:"mx-change"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g4"]',attr:"<%if($$.types['__fE']){%> mx-click=\"__fH({type:'__fE'})\" mx-mousedown=\"__ds({type:'__fE'})\" <%}else{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g5"]',attr:"<%if($$.types['__fE']){%> mx-click=\"__fH({type:'__fE',inc:1})\" mx-mousedown=\"__ds({type:'__fE',inc:1})\" <%}else{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["time","types"],path:'input[mx-guid="g6"]',attr:"value=\"<%=$$.format($$.time['__fF'])%>\" <%if($$.types['__fF']){%> mx-change=\"__fI({type:'__fF'})\" <%}else{%> disabled<%}%>",attrs:[{n:"value",q:1,p:1},{n:"mx-change"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g7"]',attr:"<%if($$.types['__fF']){%> mx-click=\"__fH({type:'__fF'})\" mx-mousedown=\"__ds({type:'__fF'})\" <%}else{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g8"]',attr:"<%if($$.types['__fF']){%> mx-click=\"__fH({type:'__fF',inc:1})\" mx-mousedown=\"__ds({type:'__fF',inc:1})\" <%}else{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]}]},init:function(e){var t=this,_=s(e.time),n=a(e.type);t.updater.set({format:d,time:_,types:n})},render:function(){this.updater.digest()},val:function(e){var t=this.updater;if(e){var _=s(e);t.digest({time:_})}return t.get("time")},__fG:function(e,t){var _=this,n=_.updater.get("time"),i="__cn"==e?23:59;t?n[e]++:n[e]--,n[e]>i?n[e]=0:n[e]<0&&(n[e]=i),_.updater.digest({time:n})},__u:function(){var e=this,t=i("#"+e.id),_=e.updater.get("time");t.trigger({type:"change",time:d(_.__cn)+":"+d(_.__fE)+":"+d(_.__fF)})},"__fH<click>":function(e){var t=this;if(!t.__dp){var _=e.params;t.__fG(_.type,_.inc),t.__u()}},"__fI<change>":function(e){e.stopPropagation();var t=e.params.type,_="__cn"==t?23:59,n=e.eventTarget,i=n.value,s=parseInt(i,10),a=this.updater.get("time");s||0===s?(s<0?s=0:s>_&&(s=_),s!==a[t]?(a[t]=s,this.updater.digest({time:a}),this.__u()):n.value=d(s)):n.value=d(a[t])},"__ds<mousedown>":function(e){var t=this,_=e.params;t.__dq=setTimeout(t.wrapAsync(function(){t.__dr=setInterval(t.wrapAsync(function(){t.__dp=!0,t.__fG(_.type,_.inc)}),50)}),300)},"__dt<keydown>":function(e){if(38==e.keyCode||40==e.keyCode){e.preventDefault();var t=this;t.__fG(e.params.type,38==e.keyCode),clearTimeout(t.__fJ),t.__fJ=setTimeout(t.wrapAsync(function(){t.__u()}),100)}},"$doc<mouseup>":function(){var e=this;clearTimeout(e.__dq),clearInterval(e.__dr),setTimeout(e.wrapAsync(function(){e.__dp&&e.__u(),delete e.__dp}),0)}})});