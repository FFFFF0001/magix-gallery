define("mx-dragsort/index",["magix","../mx-dragdrop/index","../mx-runner/index","$"],function(_,e,t){var i=_("magix"),o=_("../mx-dragdrop/index"),n=_("../mx-runner/index"),a=_("$");i.applyStyle("_n",'._cd{left:-1000px;top:0;background:#6363e6}._cd,._ce{position:absolute}._ce{width:26px;height:26px}._cf{background:#479b47}._cg{background:#e94f4f}._ce:after{font-size:20px;line-height:26px;color:#fff;position:absolute;left:0;right:0;top:0;bottom:0;text-align:center}._cf:after{content:"✓"}._cg:after{content:"✗"}');var r=i.guid("dbar_"),d=i.guid("pt_"),h=a(window),b=a(document),l={__bb:function(){a("#"+r).length||a('<div class="_cd" id="'+r+'"/>').appendTo("body")},__aK:function(_){_.child&&(a(_.child).css({opacity:.4}),this.__bb())},__aV:function(_){_.child&&a(_.child).css({opacity:1}),this.__bc(),this.__bd()},__bc:function(){a("#"+r).css({left:-1e5})},__be:function(_,e){var t=a("#"+r),i=!1;2&_.anchor&&(2&e?(t.css({height:2,width:_.bound.width,top:_.bound.y-1,left:_.bound.x}),i=!0):8&e&&(t.css({height:2,width:_.bound.width,top:_.bound.y+_.bound.height-1,left:_.bound.x}),i=!0)),!i&&1&_.anchor&&(1&e?t.css({height:_.bound.height,width:2,top:_.bound.y,left:_.bound.x-1}):4&e&&t.css({height:_.bound.height,width:2,top:_.bound.y,left:_.bound.x+_.bound.width-1}))},__bg:function(_){var e=this;_.atPlace&&_.child!=_.hover?(3==_.anchor?_.__bf&&e.__be(_,_.side):_.__bg&&e.__be(_,_.position),e.__bh(!0)):(e.__bc(),e.__bh())},__bi:function(_){var e=a("#"+d);e.length||(e=a('<div class="_ce" id="'+d+'"/>')).appendTo("body");var t=Math.max(0,Math.min(_.pageX+10,b.width()-e.width())),i=Math.max(0,Math.min(_.pageY+18,b.height()-e.height()));e.css({left:t,top:i,display:"block"})},__bh:function(_){var e=a("#"+d);_?e.removeClass("_cg").addClass("_cf"):e.addClass("_cg").removeClass("_cf")},__bd:function(){a("#"+d).hide()}};t.exports=i.View.extend({init:function(_){var e=this,t=a("#"+e.id);t.on("mousedown",_.selector,function(_){_.preventDefault(),e.__aK(_)}),e.on("destroy",function(){t.off("mousedown")}),e.__h=t;var o=[t.get(0)];_.drops&&(o=o.concat(_.drops.split(","))),e.__bj=o;var n=_.horizonal+""=="true",r=_.vertical+""=="true";n||r||(r=!0);var d=0;n&&(d|=1),r&&(d|=2),e.__bk=d;var h=!0;i.has(_,"sort")&&(h=_.sort+""=="true"),e.__bl=h},__bm:function(_){for(var e=0,t=this.__bj;e<t.length;e++){var o=t[e];if(i.inside(_,o))return i.node(o)}return null},__aM:function(_,e){var t=this,i=null;if(e||(e=t.__bm(_)),!t.__bl&&t.__bn)return{child:t.__bn,zone:e};for(;e!=_;){if(_.parentNode==e){i=_;break}_=_.parentNode}return!e||e.firstChild||i||(i=e),i&&"false"===i.getAttribute("ds-draggable")&&(i=null),{child:i,zone:e}},__bp:function(_,e){var t=0,i=0,o=-1,n=-1,a=-1,r=-1,d=!1;if(e.pageX>=_.x&&e.pageX<=_.x+_.width&&e.pageY>=_.y&&e.pageY<=_.y+_.height&&(t|=e.pageX<=_.x+_.width/2?1:4,o=e.pageX-_.x,a=_.x+_.width-e.pageX,t|=e.pageY<=_.y+_.height/2?2:8,n=e.pageY-_.y,r=_.y+_.height-e.pageY,d=!0),d){var h=Math.min(o,n,a,r);h>-1&&(h==o?i=1:h==n?i=2:h==a?i=4:h==r&&(i=8))}var b=this.__bo;return b&&b.zone===b.hover&&(t=2,i=1),{position:t,atPlace:d,side:i}},__aK:function(_){if(1===_.which){var e=this,t=e.__aM(_.target);t.child&&(e.__bn=t.child,e.__bq=t.zone,e.__h.trigger({type:"dragbegin",dragNode:t.child,dragZone:t.zone}),l.__aK(t),o.begin(t.zone,function(_){e.__aU(_)},function(_){e.__aV(_)}))}},__bt:function(_,e,t){var i=this,o=i.__bp(_,e),n=o.side!=i.__br,a=o.position!=i.__bs;(n||a)&&(i.__br=o.side,i.__bs=o.position,t.__bf=n,t.__bg=a,t.side=o.side,t.position=o.position,t.atPlace=o.atPlace,t.anchor=i.__bk,l.__bg(t))},__aU:function(_){var e=o.fromPoint(_.clientX,_.clientY),t=this;if(l.__bi(_),t.__aW=_,t.__aL=!0,t.__bu(),t.__aX(),t.__bv||t.__bw||!e)return delete t.__bx,delete t.__br,void delete t.__bs;if(t.__bx!=e){if(e.id===r)return;t.__bx=e,delete t.__br;var n=t.__bm(e);if(n){n!=t.__by&&(t.__by=n,t.__h.trigger({type:"enterzone",zone:n,changePointer:l.__bh}));var d=t.__aM(e,n);if(!d.child)return;var h=a(d.child),b=h.offset(),c={x:b.left,y:b.top,width:h.outerWidth(),height:h.outerHeight()};b=(h=a(d.zone)).offset(),t.__bz={x:b.left,y:b.top,scrollX:h.prop("scrollLeft"),scrollY:h.prop("scrollTop"),maxWidth:h.prop("scrollWidth"),maxHeight:h.prop("scrollHeight"),width:h.width(),height:h.height()},t.__bt(t.__bA=c,_,t.__bo={child:t.__bn,bound:c,zone:d.zone,hover:d.child})}else t.__by&&(t.__h.trigger({type:"leavezone",zone:t.__by,changePointer:l.__bh}),delete t.__by)}else t.__bA&&i.inside(e,t.__bo.zone)?t.__bt(t.__bA,_,t.__bo):(delete t.__br,delete t.__bs,t.__bl&&(l.__bc(),l.__bh()))},__aV:function(){var _=this;_.__bB(),_.__aY(),l.__aV({child:_.__bn});var e=_.__bs,t=_.__br,i=_.__aL,o=_.__bo,n=_.__bn;if(i&&(e||t)){var a=o.zone,r=_.__bk,d=3===r?t:e;if(1&r&&1&d||2&d&&2&r)o.hover==a?a.appendChild(n):a.insertBefore(n,o.hover);else if(8&d&&2&r||4&d&&1&r){for(var h=o.hover.nextSibling;h&&1!=h.nodeType;)h=h.nextSibling;a.insertBefore(n,h),h||(a.scrollTop=a.scrollHeight)}}o&&_.__h.trigger({type:"dragfinish",moved:i,dragNode:n,dragZone:_.__bq,dropNode:o.hover,dropZone:o.zone,outZone:!_.__by}),delete _.__bn,delete _.__bq,delete _.__bx,delete _.__bo,delete _.__bA,delete _.__bs,delete _.__br,delete _.__aW,delete _.__bw,delete _.__by,delete _.__bz,delete _.__bv,delete _.__aL},__bu:function(){var _=this;_.__bC||(_.__bC=function(){var e=_.__bz;if(e){var t=_.__bo.zone,i=0,o=0,n=_.__aW;n.pageX>e.x&&n.pageY>e.y&&n.pageX<e.x+e.width&&n.pageY<e.y+e.height?(n.pageX-e.x<20&&e.scrollX>0?i=-Math.min(7,e.scrollX):e.x+e.width-n.pageX<20&&e.scrollX+e.width<e.maxWidth&&(i=Math.min(7,e.maxWidth-e.scrollX-e.width)),n.pageY-e.y<20&&e.scrollY>0?o=-Math.min(7,e.scrollY):e.y+e.height-n.pageY<20&&e.scrollY+e.height<e.maxHeight&&(o=Math.min(7,e.maxHeight-e.scrollY-e.height)),i||o?(_.__bv=!0,_.__bD=!0,t.scrollTop+=o,t.scrollLeft+=i,e.scrollX+=i,e.scrollY+=o,delete _.__aL,l.__bc(),l.__bh()):(delete _.__bv,delete _.__bD)):(delete _.__bv,delete _.__bD)}},n.__b_(30,_.__bC))},__aX:function(){var _=this;_.__aZ||(_.__aZ=function(){if(!_.__bD){var e=0,t=0,i=_.__aW,o=h.scrollTop(),n=h.height(),a=b.height(),r=b.width(),d=h.width(),c=h.scrollLeft();i.pageX-c<20&&c>0?e=-Math.min(7,c):c+d-i.pageX<20&&c+d<r&&(e=Math.min(7,r-d-c)),i.pageY-o<20&&o>0?t=-Math.min(7,o):o+n-i.pageY<20&&o+n<a&&(t=Math.min(7,a-n-o)),e||t?(_.__bw=!0,i.pageX+=e,i.pageY+=t,window.scrollBy(e,t),delete _.__aL,l.__bc(),l.__bi(i),l.__bh()):delete _.__bw}},n.__b_(30,_.__aZ))},__bB:function(){var _=this;_.__bC&&(n.__ba(_.__bC),delete _.__bC,delete _.__bD)},__aY:function(){var _=this;_.__aZ&&(n.__ba(_.__aZ),delete _.__aZ)}})});