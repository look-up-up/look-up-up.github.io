(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{330:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("国内镜像源")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("豆瓣")]),s._v(" http://pypi.douban.com/simple/")]),s._v(" "),a("li",[a("code",[s._v("阿里云")]),s._v(" http://mirrors.aliyun.com/pypi/simple/")]),s._v(" "),a("li",[a("code",[s._v("清华大学")]),s._v(" https://pypi.tuna.tsinghua.edu.cn/simple/")]),s._v(" "),a("li",[a("code",[s._v("中国科技大学")]),s._v(" https://pypi.mirrors.ustc.edu.cn/simple/")]),s._v(" "),a("li",[a("code",[s._v("中国科学技术大学")]),s._v(" http://pypi.mirrors.ustc.edu.cn/simple/")])])]),s._v(" "),a("h2",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" package -i https://pypi.tuna.tsinghua.edu.cn/simple\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("  ~/.pip/pip.conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nindex-url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" https://pypi.tuna.tsinghua.edu.cn/simple\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置修改(没有可创建)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("pip install package "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tuna"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tsinghua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时使用")]),s._v("\npip install pip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("U\npip config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("url https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tuna"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tsinghua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令修改源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("HOMEPATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\\pip\\pip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ini\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[global]")]),s._v("\ntimeout = 6000\nindex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("url = https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tuna"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tsinghua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("simple\ntrusted"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("host = pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tuna"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tsinghua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn%"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件修改源")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);