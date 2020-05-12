(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{305:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("原理")]),s._v(" "),t("ol",[t("li",[s._v("Ansible通过底层链接模块，将数个文件或者命令或者play传输到节点的/tmp目录下，然后远程执行这些命令或者文件，之后删除这些临时文件，将执行结果回传到管理端")]),s._v(" "),t("li",[s._v("Ansible分为管理端和控制节点，只要在管理安装ansible就可以，然后只需要在管理端进行配置。控制节点是linux通过openssh去通信，控制节点是windows通过powershell去通信。")]),s._v(" "),t("li",[s._v("以配置文件作为基准，通过Ad-Hoc或者PLAYBOOK方式去调用ansible的model、plugin、API去实现对特定组或者节点的操作。")])])]),s._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[s._v("#")]),s._v(" Install")]),s._v(" "),t("h3",{attrs:{id:"pip-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pip-install","aria-hidden":"true"}},[s._v("#")]),s._v(" Pip install")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-pip python-devel gcc glibc-devel zlib-devel rpm-build openssl-devel -y\npip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --upgrade pip\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ansible --upgrade\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/ansible\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /etc/ansible/ansible.conf https://raw.githubusercontent.com/ansible/ansible/devel/examples/ansible.cfg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"source-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-install","aria-hidden":"true"}},[s._v("#")]),s._v(" Source install")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ansible/ansible.git --recursive\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ansible "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ./hacking/env-setup\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"yum-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-install","aria-hidden":"true"}},[s._v("#")]),s._v(" Yum install")]),s._v(" "),t("p",[s._v("添加源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("eof"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("/etc/yum.repos.d/aliyun.repo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("epel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("epel\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.aliyun.com/epel/7Server/x86_64/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\neof\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("or")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("eof"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("/etc/yum.repos.d/aliyun.repo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("aliyun"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("aliyun\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://mirrors.aliyun.com/centos/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/os/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://mirrors.aliyun.com/centos/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/os/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/RPM-GPG-KEY-CentOS-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("\neof\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ansible -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[s._v("#")]),s._v(" Config")]),s._v(" "),t("h3",{attrs:{id:"add-host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-host","aria-hidden":"true"}},[s._v("#")]),s._v(" add host")]),s._v(" "),t("p",[s._v("vim /etc/ansible/hosts")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("主机名 IP "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ansible_ssh_pass")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加密钥认证")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-copy-id -i /root/.ssh/id_rsa.pub root@IP\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("测试:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主机名或IP")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"add-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-group","aria-hidden":"true"}},[s._v("#")]),s._v(" add group")]),s._v(" "),t("p",[s._v("vim /etc/ansible/hosts")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("aa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a:children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\naa\nab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module","aria-hidden":"true"}},[s._v("#")]),s._v(" Module")]),s._v(" "),t("h3",{attrs:{id:"ping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ping","aria-hidden":"true"}},[s._v("#")]),s._v(" ping")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ansible all -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对所有主机测试连通性")]),s._v("\nansible-doc -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --help")]),s._v("\nansible-doc -s "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n\nansible IP -m fetch -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/fstab dest=/testdir/ansible/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制目标主机 fstab 到本机 dest 目录")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy","aria-hidden":"true"}},[s._v("#")]),s._v(" copy")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("src "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于指定需要copy的文件或目录")]),s._v("\ndest "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于指定文件将被拷贝到远程主机目录中,dest为必须参数")]),s._v("\nansible IP -m copy -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/hosts dest=/opt/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本机hosts 复制到IP主机 opt下,存在则覆盖")]),s._v("\n\nforce "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当远程主机的目标路径中已经存在同名文件，并且与ansible主机中的>文件内容不同时，是否强制覆盖，可选值有yes和no，默认值为yes，表示覆盖，如果>设置为no，则不会执行覆盖拷贝操作，远程主机中的文件保持不变。")]),s._v("\nansible IP -m copy -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/hosts dest=/opt/ force=no"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本机hosts 复制到IP主机 opt下,存在不复制")]),s._v("\n\ncontent "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当不使用src指定拷贝的文件时，可以使用content直接指定文件内容，src与content两个参数必有其一，否则会报错。")]),s._v("\nansible IP -m copy -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'content=\"aaa"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("bbb"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("\" dest=/opt/1.txt'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在IP主机/opt 下生成1.txt,文件中第一行 aaa 第二行 bbb")]),s._v("\n\nbackup "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当远程主机的目标路径中已经存在同名文件，并且与ansible主机中的文件内容不同时，是否对远程主机的文件进行备份，可选值有yes和no，当设置为yes时，会先备份远程主机中的文件，然后再将ansible主机中的文件拷贝到远程主机。")]),s._v("\nansible IP -m copy -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/hosts dest=/opt/ backup=yes"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本机hosts 复制到IP主机 opt下,存在则将其备份")]),s._v("\n\nowner "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件拷贝到远程主机后的属主，但是远程主机上必须有对应的用户，否则会报错。")]),s._v("\nansible IP -m copy -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/hosts dest=/opt/ owner=admin"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件所有者,远程IP主机必须要有对应的用户")]),s._v("\n\ngroup "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件拷贝到远程主机后的属组，但是远程主机上必须有对应的组，否则会报错。")]),s._v("\nansible IP -m copy -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/hosts dest=/opt/ group=admin"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件所属组,远程IP主机必须要有对应的组")]),s._v("\n\nmode "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 指定文件拷贝到远程主机后的权限，如果你想将权限设置为"rw-r--r--"，则可以使用mode=0644表示，如果你想要在user对应的权限位上添加执行权限，则可以使用mode=u+x表示。')]),s._v("\nansible IP -m copy -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src=/etc/hosts dest=/opt/ mode=0660"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件权限")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h3",{attrs:{id:"file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[s._v("#")]),s._v(" file")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("path "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须参数，用于指定要操作的文件或目录，在之前版本的ansible中，使用dest参数或者name参数指定要操作的文件或目录，为了兼容之前的版本，使用dest或name也可以。")]),s._v("\nansible IP-m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=touch"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建文件,已存在则更新时间戳")]),s._v("\n\nstate "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 此参数非常灵活，此参数对应的值需要根据情况设定，比如，当我们需要在远程主机中创建一个目录的时候，我们需要使用path参数指定对应的目录路径，假设，我想要在远程主机上创建/testdir/a/b目录，那么我则需要设置path=/testdir/a/b，但是，我们无法从"/testdir/a/b"这个路径看出b是一个文件还是一个目录，ansible也同样无法单单从一个字符串就知道你要创建文件还是目录，所以，我们需要通过state参数进行说明，当我们想要创建的/testdir/a/b是一个目录时，需要将state的值设置为directory，"directory"为目录之意，当它与path结合，ansible就能知道我们要操作的目标是一个目录，同理，当我们想要操作的/testdir/a/b是一个文件时，则需要将state的值设置为touch，当我们想要创建软链接文件时，需将state设置为link，想要创建硬链接文件时，需要将state设置为hard，当我们想要删除一个文件时（删除时不用区分目标是文件、目录、还是链接），则需要将state的值设置为absent，"absent"为缺席之意，当我们想让操作的目标"缺席"时，就表示我们想要删除目标。')]),s._v("\nansible test70 -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=directory"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建目录,已存在不操作")]),s._v("\n\nsrc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当state设置为link或者hard时，表示我们想要创建一个软链或者硬链，所以，我们必须指明软链或硬链链接的哪个文件，通过src参数即可指定链接源。")]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=link src=/tmp/host"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在远程主机IP上 为 src建立软连接 名为 path")]),s._v("\n\nforce "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当state=link的时候，可配合此参数强制创建链接文件，当force=yes时，表示强制创建链接文件，不过强制创建链接文件分为两种情况，情况一：当你要创建的链接文件指向的源文件并不存在时，使用此参数，可以先强制创建出链接文件。情况二：当你要创建链接文件的目录中已经存在与链接文件同名的文件时，将force设置为yes，回将同名文件覆盖为链接文件，相当于删除同名文件，创建链接文件。情况三：当你要创建链接文件的目录中已经存在与链接文件同名的文件，并且链接文件指向的源文件也不存在，这时会强制替换同名文件为链接文件。")]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=hard src=/tmp/host"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在远程主机IP上 为src创建名为path的硬链接")]),s._v("\n\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=link src=sourcefile force=yes"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建链接时，链接文件有重名 或 源文件不存在时,覆盖同名文件 或 创建链接文件")]),s._v("\n\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=absent"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程主机IP 上指定的path")]),s._v("\n\nowner "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于指定被操作文件的属主，属主对应的用户必须在远程主机中存在，否则会报错。")]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=touch owner=admin"')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host owner=admin"')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=directory owner=admin"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在创建文件或目录时指定所有者,或修改")]),s._v("\n\ngroup "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于指定被操作文件的属组，属组对应的组必须在远程主机中存在，否则会报错。")]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=touch group=admin"')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host group=admin"')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=directory group=admin"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定所属组,或修改")]),s._v("\n\nmode "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 用于指定被操作文件的权限，比如，如果想要将文件权限设置为"rw-r-x---"，则可以使用mode=650进行设置，或者使用mode=0650，效果也是相同的，如果你想要设置特殊权限，比如为二进制文件设置suid，则可以使用mode=4700，很方便吧。')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=touch mode=0664"')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host mode=0644"')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host mode=4700"')]),s._v("\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=directory mode=0664"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定权限,或修改")]),s._v("\n\nansible IP -m "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path=/etc/host state=directory owner=admingroup=admin recurse=yes"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改目录内所有文件的所有者和组为 admin")]),s._v("\n\n\nrecurse "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当要操作的文件为目录，将recurse设置为yes，可以递归的修改目录中文件的属性。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br")])]),t("h3",{attrs:{id:"blockinfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockinfile","aria-hidden":"true"}},[s._v("#")]),s._v(" blockinfile")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);