(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{321:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("ol",[t("li",[s._v("FTP文件传输协议（File Transfer Protocol），用于Internet上的控制文件的双向传输，是一个应用程序。工作在TCP/IP协议族的应用层，其传输层协议是TCP协议，目的在于提高文件传输的共享性和可靠性，是基于客户/服务器模式工作的。")]),s._v(" "),t("li",[s._v("相比其他协议，如HTTP协议，FTP协议要复杂一些。与一般的C/S模型只会建立一个socket连接，这个连接同时处理服务器和客户端的连接命令和数据传输。而FTP会建立两个连接，将命令与数据分开传输，正是因为这样，提高了传输效率。")])]),s._v(" "),t("p",[s._v("FTP使用两个端口，分别为控制端口（命令端口）和数据端口。控制端口号一般为21，数据端口一般为20。控制socket用来传输命令，数据socket用来传输数据。每一个FTP命令发送后，FTP服务器就会返回一个字符串，其中包含一个响应码和一些说明信息，其中响应码主要用于判断命令是否被成功执行了。")])]),s._v(" "),t("h2",{attrs:{id:"ftp-传输模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftp-传输模式","aria-hidden":"true"}},[s._v("#")]),s._v(" FTP 传输模式")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("1．"),t("code",[s._v("ASCII传输方式:")]),s._v(" 假定用户正在拷贝的文件包含的简单ASCII码文本，如果在远程机器上运行的不是UNIX。"),t("code",[s._v("当文件传输时ftp通常会自动地调整文件的内容以便于把文件解释成另外那台计算机存储文本文件的格式。")])]),s._v(" "),t("p",[s._v("2．"),t("code",[s._v("二进制传输模式:")]),s._v(" 在二进制传输中，保存文件的位序，以便原始和拷贝的是逐位一一对应的。即使目的地机器上包含位序列的文件是没意义的。"),t("code",[s._v("不会对这些文件进行处理。")])])]),s._v(" "),t("h2",{attrs:{id:"ftp-工作模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftp-工作模式","aria-hidden":"true"}},[s._v("#")]),s._v(" FTP 工作模式")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("ol",[t("li",[t("code",[s._v("主动模式:")]),s._v(" Standard模式(PORT) FTP的客户端发送 PORT 命令到FTP服务器."),t("code",[s._v("过程:")]),s._v("客户端随机打开一个大于 1024 的端口向服务器的命令端口 P，即 21 端口，发起连接，同时开放N +1 端口监听，并向服务器发出 “port N+1” 命令，由\n服务器从它自己的数据端口 (20) 主动连接到客户端指定的数据端口 (N+1)。")]),s._v(" "),t("li",[t("code",[s._v("被动模式:")]),s._v(" Passive (PASV) FTP的客户端发送 PASV命令到 FTP Server。\n"),t("code",[s._v("过程:")]),s._v("当开启一个 FTP 连接时，客户端打开两个任意的本地端口 (N > 1024 和 N+1)")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://took-up-up.gitee.io/pic/FTP.jpg",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://took-up-up.gitee.io/pic/FTP2.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" Install")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vsftpd -y\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装ftp服务端")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[s._v("#")]),s._v(" Config")]),s._v(" "),t("h3",{attrs:{id:"add-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-user","aria-hidden":"true"}},[s._v("#")]),s._v(" Add USER")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" xx\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" xx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为FTP新建用户")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[s._v("#")]),s._v(" set")]),s._v(" "),t("p",[s._v("vim  /etc/vsftpd/vsftpd.conf")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("anonymous_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NO\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("local_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("write_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("chroot_local_user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("chroot_list_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("chroot_list_file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/vsftpd/user_list\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("local_umask")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("022\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dirmessage_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("xferlog_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("connect_from_port_20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("xferlog_std_format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listen_ipv6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NO\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pam_service_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("vsftpd\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userlist_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tcp_wrappers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启被动模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("local_root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/ftp/test\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("allow_writeable_chroot")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pasv_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pasv_address")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x.x.x.x "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# x.x.x.x :公网 IP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pasv_min_port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pasv_max_port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45000")]),s._v("\n~\n~\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[s._v("#")]),s._v(" Run")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start vsftpd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动FTP")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" vsftpd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机自启动(可选)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[s._v("#")]),s._v(" Client")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ftp://x.x.x.x:21\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);