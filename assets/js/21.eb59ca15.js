(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{301:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",[s._v("/etc/sudoers 配置错误导致非root用户sudo失效")])]),s._v(" "),t("p",[s._v("开启两个会话(session)")]),s._v(" "),t("h2",{attrs:{id:"第一步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步","aria-hidden":"true"}},[s._v("#")]),s._v(" 第一步")]),s._v(" "),t("h3",{attrs:{id:"session-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-1","aria-hidden":"true"}},[s._v("#")]),s._v(" session-1")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$$")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("得到你目前Bash的 PID。")]),s._v(" "),t("h2",{attrs:{id:"第二步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步","aria-hidden":"true"}},[s._v("#")]),s._v(" 第二步")]),s._v(" "),t("h3",{attrs:{id:"session-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-2","aria-hidden":"true"}},[s._v("#")]),s._v(" session-2")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pkttyagent --process pid "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pid是上一步获取")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"第三步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步","aria-hidden":"true"}},[s._v("#")]),s._v(" 第三步")]),s._v(" "),t("h3",{attrs:{id:"session-1-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-1-2","aria-hidden":"true"}},[s._v("#")]),s._v(" session-1")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pkexec visudo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"第四步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四步","aria-hidden":"true"}},[s._v("#")]),s._v(" 第四步")]),s._v(" "),t("h3",{attrs:{id:"session-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-2-2","aria-hidden":"true"}},[s._v("#")]),s._v(" session-2")]),s._v(" "),t("p",[s._v("Bash提示进行权限认证，输入密码")]),s._v(" "),t("h2",{attrs:{id:"第五步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五步","aria-hidden":"true"}},[s._v("#")]),s._v(" 第五步")]),s._v(" "),t("h3",{attrs:{id:"修改sudoers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改sudoers","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改sudoers")]),s._v(" "),t("p",[s._v("回到session后是我们熟悉的visudo界面。\n修改保存并退出：")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("执行sudo visudo，默认使用nano编辑器")]),s._v(" "),t("p",[t("code",[s._v("保存")]),s._v(" 执行 "),t("code",[s._v("Ctrl+O")]),s._v("  回车会输出 ”File Name to Write sudoers.tmp”, 在tmp后执行回车")]),s._v(" "),t("p",[t("code",[s._v("退出")]),s._v(" 执行 "),t("code",[s._v("Ctrl+X")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);