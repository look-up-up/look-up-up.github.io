(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{307:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",[s._v("Transmission带web界面的下载工具")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" transmission-daemon transmission-cli -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[t("strong",[s._v("vim /var/lib/transmission/.config/transmission-daemon/settings.json")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主要修改以下参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"download-dir"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/down"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载目录的绝对路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"incomplete-dir"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/down/temp"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#临时文件路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-authentication-required"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true, "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-bind-address"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许任何IP通过RPC协议访问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-enabled"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true, "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许通过RPC访问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-password"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RPC验证密码（保存并启动后daemon会计算并替换为HASH值以增加安全性）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-port"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9091")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RPC端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-username"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transmission"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RPC验证用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-whitelist"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RPC访问白名单")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc-whitelist-enabled"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false, "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭白名单功能以便公网访问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start transmission-daemon\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"web界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web界面","aria-hidden":"true"}},[s._v("#")]),s._v(" web界面")]),s._v(" "),t("p",[s._v("http://your.domain.name:9091/transmission/web/")])])}),[],!1,null,null,null);a.default=e.exports}}]);