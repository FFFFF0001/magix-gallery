/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-tree/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-tree</h2><div class=\"B ag\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-tree/index?list=<%@$$.list%>\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-tree/index\"\n    view-list=\"&lt;%@list%&gt;\"\n&gt;&lt;/div&gt;</pre><div class=\"z\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: '',\n                text: 'abc'\n            }, {\n                id: '0-0',\n                pId: '',\n                text: 'abc-abc'\n            }, {\n                id: 1,\n                pId: 0,\n                text: 'def'\n            }, {\n                id: 2,\n                pId: 1,\n                text: 'aaa'\n            }, {\n                id: 3,\n                pId: 2,\n                text: 'bbb'\n            }]\n        });\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-tree/index?list=<%@$$.list%>\"","attrs":[{"n":"mx-view","v":1}]}]},
    render: function () {
        var me = this;
        me.updater.digest({
            list: [{
                    id: 0,
                    pId: '',
                    text: 'abc'
                }, {
                    id: '0-0',
                    pId: '',
                    text: 'abc-abc'
                }, {
                    id: 1,
                    pId: 0,
                    text: 'def'
                }, {
                    id: 2,
                    pId: 1,
                    text: 'aaa'
                }, {
                    id: 3,
                    pId: 2,
                    text: 'bbb'
                }]
        });
    }
});

});