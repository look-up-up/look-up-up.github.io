(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{324:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),a("p",[s._v("Scopus是全球最大的文献摘要与科研信息引用数据库，每日更新，内容包括：")]),s._v(" "),a("p",[s._v("· 拥有5830多万条记录（1996年后3500万条；1823-1995年2200万条）")]),s._v(" "),a("p",[s._v("· 来自5,000多家国际出版商的21,900期刊，含20,000多种同行评议期刊")]),s._v(" "),a("p",[s._v("· 2,800份黄金开放获取访问期刊")]),s._v(" "),a("p",[s._v("· 3750种在编期刊（先于发表1-4个月获取）")]),s._v(" "),a("p",[s._v("· 75,000+本图书")]),s._v(" "),a("p",[s._v("· 超过680万份会议论文")]),s._v(" "),a("p",[s._v("· 超过500套丛书系列")]),s._v(" "),a("p",[s._v("· 100%全覆盖Medline")]),s._v(" "),a("p",[s._v("· 覆盖150多个国家的超过40多种语言的刊物，含500余种同行评议的中文期刊，远多于其他国际同行")])]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("ol",[a("li",[s._v("爬取Scopus需要注册 elsevier 开发者账号 key")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://dev.elsevier.com/api_docs.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("API文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("使用 pybliometrics 库")])])]),s._v(" "),a("h2",{attrs:{id:"pybliometrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pybliometrics","aria-hidden":"true"}},[s._v("#")]),s._v(" pybliometrics")]),s._v(" "),a("h3",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" Install")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pybliometrics\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"配置-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-key","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 key")]),s._v(" "),a("p",[s._v("vim ~/.scopus/config.ini")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nAPIKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 37e97e97e894gt1sg234048hr64ae345\nInstToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# InstToken 无需配置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[s._v("#")]),s._v(" Code")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pybliometrics\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pybliometrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scopus "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AuthorRetrieval\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" AuthorRetrieval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'45612149875'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("document_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pybliometrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scopus "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ScopusSearch\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ScopusSearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DOI(10.1016/S0001-8791(02)00059-3)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("locals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);