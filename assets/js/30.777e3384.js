(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{393:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"文件传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件传输"}},[s._v("#")]),s._v(" 文件传输")]),s._v(" "),a("h2",{attrs:{id:"scp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[s._v("#")]),s._v(" scp")]),s._v(" "),a("p",[s._v("主要用来上传、下载文件。")]),s._v(" "),a("p",[s._v("优点：语法简单，使用方便，适合在命令行用。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传到服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r abc root@ip:\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载到本地（换下位置就行）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r root@ip:/var/www/backup/  ~/\n\n")])])]),a("h2",{attrs:{id:"rsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsync"}},[s._v("#")]),s._v(" rsync")]),s._v(" "),a("p",[s._v("很多时候我们需要的只是同步两个目录的差异，尤其当目录内容很多时，这个时候 "),a("code",[s._v("scp")]),s._v(" 就不适用了，可以使用 "),a("code",[s._v("rsync")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -rv --delete root@ip:/var/www/backup/ ~/backup/\n")])])]),a("p",[s._v("顺便提示下，要是误删， 加上"),a("code",[s._v("--delete")]),s._v("就同步删除了。")]),s._v(" "),a("h2",{attrs:{id:"写个脚本练下手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写个脚本练下手"}},[s._v("#")]),s._v(" 写个脚本练下手")]),s._v(" "),a("p",[s._v("作用：同步我服务器上网站的备份目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("sync_dryrun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[1m ...dryrun..."),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v('[0m"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av --delete "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${host}")]),s._v(":/var/www/backup/ ~/backup/ --dry-run\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[1m ...dryrun..."),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v('[0m"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nsync_dryrun\n\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("sync_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[1m ...syncing..."),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v('[0m"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -av  --progress --delete "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${user}")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${host}")]),s._v(":/var/www/backup/ ~/backup/\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v("[1m ...done..."),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[s._v("\\033")]),s._v('[0m"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Want to sync? (Y/n): "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" AAA\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${AAA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("y}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"y"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    sync_server\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Nothing done, bye.\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n\n")])])]),a("p",[s._v("参考链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://haoduoshipin.com/videos/48",target:"_blank",rel:"noopener noreferrer"}},[s._v("介绍 rsync 数据同步工具"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gist.github.com/happypeter/4248241",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gist.github.com/4248241"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);