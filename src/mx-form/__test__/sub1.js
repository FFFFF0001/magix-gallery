/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-form/__test__/sub1',["magix","../index"],function(require,exports,module){
/*Magix,Form*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"at ag\"><label class=\"au av\">活动名称：</label><div class=\"aw\"><input mx-guid=\"g0\u001f\" mx-ssid=\"\u001f0\" class=\"an\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-change=\"\u001f\u001e_b({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001e_b()\" mx-focusin=\"\u001f\u001e_b()\"></div></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]}]},
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});