(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{381:function(e,t,a){"use strict";a.r(t);var r=a(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lnmp-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lnmp-性能优化"}},[e._v("#")]),e._v(" LNMP 性能优化")]),e._v(" "),a("h1",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),a("p",[e._v("修改最大打开文件数:\n通过 "),a("code",[e._v("ulimit -n")]),e._v(" 查看，ubuntu 16 默认值为 1024，显然需要增大。找了很多方法最后测试证明"),a("a",{attrs:{href:"https://phpsolved.com/ubuntu-16-increase-maximum-file-open-limit-ulimit-n/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这个方法"),a("OutboundLink")],1),e._v("是可行的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ulimit -n\n65335\n")])])]),a("h1",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("worker_processes 1;//根据 CPU 核心数决定\n\nworker_rlimit_nofile 65535;//子进程允许打开的文件数\n\nevents {\n        worker_connections 32700;\n}\n\ngzip on;//开启gzip\n")])])]),a("h1",{attrs:{id:"php-fpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-fpm"}},[e._v("#")]),e._v(" PHP-FPM")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" pm = dynamic\n pm.max_children = 25 //一个php-fpm进程差不多20M，可根据服务器内存来决定\n pm.start_servers = 10\n pm.min_spare_servers = 10\n pm.max_spare_servers = 15\n\n rlimit_files = 65535//最大打开文件数\n request_terminate_timeout = 30// 脚本超时时间s\n")])])]),a("p",[e._v("pm表示使用那种方式，有两个值可以选择，就是static（静态）或者dynamic（动态）。")]),e._v(" "),a("p",[e._v("下面4个参数的意思分别为：")]),e._v(" "),a("p",[e._v("pm.max_children：静态方式下开启的php-fpm进程数量，在动态方式下他限定php-fpm的最大进程数（这里要注意pm.max_spare_servers的值只能小于等于pm.max_children）\npm.start_servers：动态方式下的起始php-fpm进程数量。\npm.min_spare_servers：动态方式空闲状态下的最小php-fpm进程数量。\npm.max_spare_servers：动态方式空闲状态下的最大php-fpm进程数量。")]),e._v(" "),a("p",[e._v("参数值主要还是要根据服务器具体的硬件环境来决定。")]),e._v(" "),a("p",[e._v("参考链接")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009724421",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://segmentfault.com/a/1190000009724421"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/wawahaha/p/4667515.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.cnblogs.com/wawahaha/p/4667515.html"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);