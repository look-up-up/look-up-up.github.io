(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{298:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",[s._v("这是一个命令行界面的密码管理工具，使用gpg加密，支持git同步\n"),n("a",{attrs:{href:"https://github.com/gopasspw/gopass/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("gopass下载"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" install")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gnupg2 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rng-tools\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#依赖 git gpg")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh https://github.com/gopasspw/gopass/releases/download/v1.8.6/gopass-1.8.6-linux-amd64.rpm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/gopasspw/gopass/releases/download/v1.8.6/gopass-1.8.6-linux-amd64.rpm "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh gopass-1.8.6-linux-amd64.rpm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"use"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[s._v("#")]),s._v(" Use")]),s._v(" "),n("h3",{attrs:{id:"初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("gpg --full-generate-key "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生成密钥")]),s._v("\n\ngpg -k "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看生成好的密钥")]),s._v("\ngopass init "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#初始化")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source <(gopass completion bash)"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自动补全")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"use-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-2","aria-hidden":"true"}},[s._v("#")]),s._v(" Use")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("gopass "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("insert/generate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" twitter/passwd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#insert输入密码 generate生成随机密码")]),s._v("\ngopass or gopass "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看目录结构")]),s._v("\ngopass twitter/passwd\ngopass "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("find/search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示密码")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"使用存储地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用存储地址","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用存储地址")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("gopass init --store my-company\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 ~/.password-store-my-company 里新建一个存储地址")]),s._v("\ngopass "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --store my-company origin git@xx.com/xx/xx.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同步到远程")]),s._v("\ngopass clone git@gh.com/Woile/keys.git my-company --sync gitcli\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆已有的存储地址")]),s._v("\n\ngopass mounts "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" my-company\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除已有的存储地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.password-store-my-company\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件夹")]),s._v("\n\ngopass "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 和远程进行同步")]),s._v("\ngopass "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v(" --store my-company\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 和一个存储地址进行同步")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"团队共享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#团队共享","aria-hidden":"true"}},[s._v("#")]),s._v(" 团队共享")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("gpg -a --export logan@pm.me "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" logan.pub.asc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 共享密信。 假如我们的同事有个邮箱 logan@pm.me。这个人已经在他的电脑里用那个邮箱生成了 gpg 密钥。 他要解析公钥并把它发给我们。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥是可以放在不可靠的地方的。 如果你不是很确信，那就用 firefox send。 记住人们一般在密钥服务器分享公钥的，像 opengpgkeyserver。")]),s._v("\n\ngpg --import "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" logan.pub.asc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加公钥到 gopass 里")]),s._v("\ngopass recipients "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" logan@pm.me\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加新的收信人到 gopass 存储地址")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工具","aria-hidden":"true"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),n("p",[n("code",[s._v("Android password store")]),s._v("\n我建议用 f-droid 来安装它，你需要 OpenKey-chain 来创建一个新的 gpg 密钥")]),s._v(" "),n("p",[n("code",[s._v("gopass bridge")]),s._v("\nfirefox 或 chrome 上的插件，可以让你登录你的存储地址。")]),s._v(" "),n("p",[n("code",[s._v("gopass ui")]),s._v("\n在命令行里使用 gopass 的基于 electron 的 ui 软件。 提供了丰富的图形界面去搜索和管理你的密码。")])])}),[],!1,null,null,null);a.default=e.exports}}]);