(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{295:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),a("ol",[a("li",[s._v("这是一个例子；"),a("br"),s._v("\n2.. 你可以打开 "),a("a",{attrs:{href:"ex"}},[s._v("ex")])])])]),s._v(" "),a("h2",{attrs:{id:"filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[s._v("#")]),s._v(" filter")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("filter :负责过滤，防火墙\nnat "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 负责网络地址转换\nmangle "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 拆解报文,修改报文,并重新封装\nraw "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 关闭nat表上启用的连接追踪机制\n\niptables -t xx -L\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看表 xx 全部规则(默认表 filter)")]),s._v("\n\niptables -t xx -nvxL\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看详情")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables -t filter -F INPUT -s x.x.x.x -j DROP\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# x.x.x.x/16 支持网段和,连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当报文的源地址IP在x,a内, 当报文经过INPUT链时就会被DROP掉")]),s._v("\niptables -t filter -F INPUT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -s x.x.x.x -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当报文的源地址IP不是x,就接受报文, 在无其他规则下来自x的报文也会接受")]),s._v("\niptables -t filter -F INPUT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -s x.x.x.x -d c.c.c.c -j DROP\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拒绝从x发往c的报文")]),s._v("\niptables -t filter -F INPUT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -s x.x.x.x -d c.c.c.c -p tcp -j DROP\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拒绝从x发往c的 tcp 报文")]),s._v("\niptables -t filter -I INPUT -i eth1 -p icmp -j DROP\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拒绝由网卡eth1流入的icmp报文")]),s._v("\n\niptables -t filter -I INPUT -s x.x.x.x -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" -j REJECT "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多端口,连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拒绝由x发往 本机22端口的tcp连接")]),s._v("\niptavles -t filter -I INPUT -s x.x.x.x -p tcp --sport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接受由x 22端口发来的tcp报文")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 22:25 22到25所有端口\t:22 0到22端口  22: 22到65535端口")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"iprange-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iprange-模块","aria-hidden":"true"}},[s._v("#")]),s._v(" iprange 模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables -t filter -I INPUT -m iprange --src-range "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.10-192.168.0.20 -j FROP\n--dst-range\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 丢弃来自10-20的报文")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"string-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-模块","aria-hidden":"true"}},[s._v("#")]),s._v(" string 模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("pass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"time-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-模块","aria-hidden":"true"}},[s._v("#")]),s._v(" time 模块")]),s._v(" "),a("p",[a("strong",[s._v("拒绝向80端口发送报文")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables -t filter -I OUTPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" --timestart 00:00:00 --timestop "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":00:00 -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 00:00:00开始 12:00:00结束")]),s._v("\n\niptables -t filter -I OUTPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" --weekdays "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(" -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 周一和周二")]),s._v("\n\niptables -t filter -I OUTPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" --timestart 00:00:00 --timestop "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":00:00  --weekdays "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(" -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 周一和周二的00:00:00开始 12:00:00结束")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可取反")]),s._v("\n\niptables -t filter -I OUTPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" --monthdays "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11,12")]),s._v(" -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个月11,12号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可取反")]),s._v("\n\niptables -t filter -I OUTPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" --weekdays "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --monthdays "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11,12")]),s._v(",13,14,15,16,17 -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个月11,12,13,14,15,16,17中的周一")]),s._v("\n\niptables -t filter I OUTPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" --datestart "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-01-01 --datestop "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-01-03 -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2020-01-01 到 2020-01-03")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"connlimit-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connlimit-模块","aria-hidden":"true"}},[s._v("#")]),s._v(" connlimit 模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables -I INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" -m connlimit --connlimit-above "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -j REJECT\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个ip连接数上限为2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"limit-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-模块","aria-hidden":"true"}},[s._v("#")]),s._v(" limit 模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables -t filter -I INPUT -p icmp -m limit --limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("/minute -j ACCEPT\niptables -t filter -A INPUT -p icmp -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接收每分钟<=10个icmp报文")]),s._v("\n\niptables -t filter -I INPUT -p icmp -m limit --limit-burst "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" --limit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("/minute -j ACCEPT\niptables -t filter -A INPUT -p icmp -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每秒生成3个令牌")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"tcp-flage-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-flage-模块","aria-hidden":"true"}},[s._v("#")]),s._v(" tcp-flage 模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables -t filter -I INPUT -p tcp -m tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" --tcp-flags SYN,ACK,FIN,RST,URG,PSH SYN -j REJECT\niptables -t filter -I OUTPUT -p tcp -m tcp --sport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" --tcp-flags SYN,ACK,FIN,RST,URG,PSH SYN,ACK -j REJECT\niptables -t filter -I INPUT -p tcp -m tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" --tcp-flags ALL SYN -j REJECT\niptables -t filter -I OUTPUT -p tcp -m tcp --sport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" --tcp-flags ALL SYN,ACK -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配报文tcp三次握手头的标志位")]),s._v("\niptables -t filter -I INPUT -p tcp -m tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" --syn -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配新建tcp连接请求报文")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"icmp-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icmp-模块","aria-hidden":"true"}},[s._v("#")]),s._v(" icmp 模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables -t filter -I INPUT -p icmp -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拒绝所有icmp报文")]),s._v("\n\niptables -t filter -I INPUT -p icmp-type "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" -jREJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping其他主机")]),s._v("\niptables -t filter -I INPUT -p icmp --icmp-type "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo-request"')]),s._v(" -j REJECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相反")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);