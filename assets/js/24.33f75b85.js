(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{304:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",[s._v("批量查询https证书有效时长")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#需要监测的域名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("END_TIME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openssl s_client -servername $yuming  -connect $yuming:443 "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openssl x509 -noout -dates -subject"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'After'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'='")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' +'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v(" }'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openssl s_client -servername $yuming  -connect $yuming:443 "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openssl x509 -subject"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'subject'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("END_TIME1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$END_TIME")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将日期转化为时间戳")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NOW_TIME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' +'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将目前的日期也转化为时间戳")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("$END_TIME1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("$NOW_TIME"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("*60*24"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#到期时间减去目前时间再转化为天数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$yuming")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("天后过期'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);