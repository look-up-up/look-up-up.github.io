(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{341:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),t("ol",[t("li",[s._v("搭配nginx下php编译安装")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.php.net/distributions/php-7.4.4.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[s._v("php源码下载"),t("OutboundLink")],1)])])]),s._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" install")]),s._v(" "),t("h3",{attrs:{id:"安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" gd-devel libjpeg-devel libpng-devel libxml2-devel bzip2-devel libcurl-devel -y\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下参数支持,ftp,图片函数,pdo等支持,因使用php自带mysqlnd所以不需额外安装mysql的lib库.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是64位系统，参数后面加上--with-libdir=lib64，如果>不是可以跳过。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"源码编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码编译","aria-hidden":"true"}},[s._v("#")]),s._v(" 源码编译")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf php-7.4.0.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" php-7.4.0\n./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/php-7.4.0 --with-config-file-path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/php-7.1.12/etc --with-bz2 --with-curl --enable-ftp --enable-sockets --disable-ipv6 --with-gd --with-jpeg-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local --with-png-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local --with-freetype-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local --enable-gd-native-ttf --with-iconv-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local --enable-mbstring --enable-calendar --with-gettext --with-libxml-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local --with-zlib --with-pdo-mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysqlnd --with-mysqli"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysqlnd --with-mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysqlnd --enable-dom --enable-xml --enable-fpm --with-libdir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("lib64\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备注：如果PHP不需要curl和ftp的支持,可以将以上的--with-curl --enable-ftp去掉. 如果你是专业的linux从业人员,你完全可以看着help来选择你的安装参数，如果你不是的话,我建议你直接复制黏贴我的配置参数.这样可以少走一些弯路.")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"配置php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置php","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置php")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/php-7.1.12/etc/php-fpm.d/www.conf\nuser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nobody\ngroup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nobody\t--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" root\n./sbin -R\t--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 强制运行\n\nex:\nnginx配置\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root /usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index index.html index.htm index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        location ~ .*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            fastcgi_pass   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            fastcgi_index  index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            fastcgi_param  SCRIPT_FILENAME  /usr/local/nginx/html/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            include        fastcgi_params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("nginx将会连接回环地址9000端口执行PHP文件,需要使用tcp/ip协议,速度比较慢.建议大家换成使用socket方式连接。将fastcgi_pass 127.0.0.1:9000;改成fastcgi_pass unix:/var/run/phpfpm.sock(存在的话);")])]),s._v(" "),t("p",[s._v("在web目录下新建index.php")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php\n    phpinfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("访问验证")])])}),[],!1,null,null,null);a.default=e.exports}}]);