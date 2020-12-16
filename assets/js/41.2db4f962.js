(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{377:function(n,s,e){"use strict";e.r(s);var a=e(42),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-配置虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置虚拟主机"}},[n._v("#")]),n._v(" nginx 配置虚拟主机")]),n._v(" "),e("p",[e("code",[n._v("nginx")]),n._v(" 配置虚拟主机十分简单，只需添加 "),e("code",[n._v("server")]),n._v(" ,修改 "),e("code",[n._v("server_name")]),n._v(" 、"),e("code",[n._v("root")]),n._v(" 即可。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("server {\n    listen 80;\n    server_name wordpress.dev;\n    access_log /data/wwwlogs/access_nginx.log combined;\n    root /data/www/wordpress;\n    index index.html index.htm index.php;\n    location /nginx_status {\n        stub_status on;\n        access_log off;\n        allow 127.0.0.1;\n        deny all;\n        }\n    location ~ [^/]\\.php(/|$) {\n        #fastcgi_pass remote_php_ip:9000;\n        fastcgi_pass unix:/dev/shm/php-cgi.sock;\n        fastcgi_index index.php;\n        include fastcgi.conf;\n        }\n    location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|flv|ico)$ {\n        expires 30d;\n        access_log off;\n        }\n    location ~ .*\\.(js|css)?$ {\n        expires 7d;\n        access_log off;\n        }\n    }\n")])])]),e("p",[n._v("默认 "),e("code",[n._v("nginx.conf")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("server {\n    listen 80;\n    server_name _;\n    access_log /data/wwwlogs/access_nginx.log combined;\n    root /data/wwwroot/default;\n    index index.html index.htm index.php;\n    location /nginx_status {\n        stub_status on;\n        access_log off;\n        allow 127.0.0.1;\n        deny all;\n        }\n    location ~ [^/]\\.php(/|$) {\n        #fastcgi_pass remote_php_ip:9000;\n        fastcgi_pass unix:/dev/shm/php-cgi.sock;\n        fastcgi_index index.php;\n        include fastcgi.conf;\n        }\n    location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|flv|ico)$ {\n        expires 30d;\n        access_log off;\n        }\n    location ~ .*\\.(js|css)?$ {\n        expires 7d;\n        access_log off;\n        }\n    }\n")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);