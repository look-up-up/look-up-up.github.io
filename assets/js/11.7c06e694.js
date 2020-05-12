(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{344:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("虚拟化是什么")]),s._v(" "),n("p",[s._v("通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。在实体计算机中能够完成的工作在虚拟机中都能够实现")])]),s._v(" "),n("h2",{attrs:{id:"docker-原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-原理","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 原理")]),s._v(" "),n("p",[s._v("容器有效的将单个操作系统管理的资源划分到孤立的组中，以便更好的在孤立的组之间平衡有冲突的资源使用需求。与虚拟化相比，这样既不需要指令级模拟，也不需要即时编译。容器可以在核心CPU本地运行指令，而不需要任何专门的解释机制。此外，也避免了准虚拟化（paravirtualization）和系统调用替换中的复杂性。\n简而言之就是，Docker是一个盒子，一个盒子装一个玩具，无论你丢在哪里，你给他通电(glibc)，他就能运行。你的玩具大就用大盒子，小玩具就用小盒子。")]),s._v(" "),n("p",[s._v("两个应用之间的环境是环境是完全隔离的，建立通信机制来互相调用。容器的创建和停止都十分快速（秒级），容器自身对资源的需求十分有限，远比虚拟机本身占用的资源少。")]),s._v(" "),n("h2",{attrs:{id:"docker-对比-传统虚拟化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-对比-传统虚拟化","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 对比 传统虚拟化")]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[n("img",{attrs:{src:"https://took-up-up.gitee.io/pic/vm.png",alt:""}}),s._v(" "),n("img",{attrs:{src:"https://took-up-up.gitee.io/pic/docker.png",alt:""}})]),s._v(" "),n("ol",[n("li",[s._v("与宿主机使用同一个内核，性能损耗小；")]),s._v(" "),n("li",[s._v("不需要指令级模拟；")]),s._v(" "),n("li",[s._v("不需要即时(Just-in-time)编译；")]),s._v(" "),n("li",[s._v("容器可以在CPU核心的本地运行指令，不需要任何专门的解释机制；")]),s._v(" "),n("li",[s._v("避免了准虚拟化和系统调用替换中的复杂性；")]),s._v(" "),n("li",[s._v("轻量级隔离，在隔离的同时还提供共享机制，以实现容器与宿主机的资源共享。\n总结: 传统虚拟化提供系统环境,容器提供应用环境,虚拟化层次不同")])])]),s._v(" "),n("h2",{attrs:{id:"docker-架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 架构")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://took-up-up.gitee.io/pic/docker1.png",alt:""}}),s._v("\nDocker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器")]),s._v(" "),n("p",[s._v("Docker 容器通过 Docker 镜像来创建。")]),s._v(" "),n("h2",{attrs:{id:"docker-install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-install","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Install")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nyum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置镜像源")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Docker-CE")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器镜像缺省路径/var/lib/docker")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"docker-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-config","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Config")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\nsystemctl start docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" xx\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG docker xx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加docker用户组（可选）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n    "registry-mirrors": ["http://hub-mirror.c.163.com"]\n}\nEOF')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置加速镜像(文件没有即创建)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n    "registry-mirrors": [\n            "http://hub-mirror.c.163.com",\n            "registry-scu.cloudtogo.cn",\n            ],\n    "insecure-registry": ["x.x.x.x:5000"]\n}\nEOF')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置多个加速镜像和私有库地址")]),s._v("\nsystemctl daemon-reload\nsystemctl restart docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h2",{attrs:{id:"错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错误","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误")]),s._v(" "),n("p",[s._v("/usr/bin/docker-current:\nError response from daemon:\nerror creating overlay mount to\n/var/lib/docker/overlay2/65f3c109fb903539820f84856d2725af784f2f03f95b1f0214e34184e4d61ff7-init/merged:\ninvalid argument.")]),s._v(" "),n("p",[s._v("解决方案")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl stop docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/docker-storage\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改存储类型")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOCKER_STORAGE_OPTIONS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--storage-driver overlay"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并且去除")]),s._v("\n--selinux-enabled\nsystemctl start docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"use"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[s._v("#")]),s._v(" Use")]),s._v(" "),n("h3",{attrs:{id:"常用操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用操作")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker search ubuntu\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找可用版本")]),s._v("\ndocker pull ubuntu:15.10\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\ndocker run -it ubuntu:15.10 /bin/bash\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动镜像 i: 交互式操作 t: 终端 d: 后台启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在完成操作之后，输入 exit 命令来退出这个容器")]),s._v("\ndocker images\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有镜像")]),s._v("\ndocker port 容器ID\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器端口映射")]),s._v("\ndocker logs -f 容器ID\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器内部的标准输出")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" 容器名\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器内部运行的进程")]),s._v("\nocker inspect 容器名\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器的配置和状态信息 json格式")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看到容器的端口映射")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有已停止运行的容器")]),s._v("\ndocker stop 容器ID\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止一个容器")]),s._v("\ndocker restart 容器ID\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个容器")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器ID /bin/bash\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入一个运行在后台的容器")]),s._v("\ndocker attach 容器ID\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与exec相同,但退出后会停止容器")]),s._v("\n\ndocker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 容器ID "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ubuntu.tar\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" docker/ubuntu.tar "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - test/ubuntu:v1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入容器")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" http://example.com/ubuntutgz example/imagerepo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上")]),s._v("\n\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f 容器ID\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器(需停止)")]),s._v("\ndocker container prune\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理所有处于终止状态的容器")]),s._v("\n\ndocker commit -m"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"has update"')]),s._v(" -a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runoob"')]),s._v(" e218edb10161 runoob/ubuntu:v2\n-m:提交的描述信息\n-a:指定镜像作者\ne218edb10161：容器ID\nrunoob/ubuntu:v2:指定要创建的目标镜像名\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 镜像重命名")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 6dd4380ba708:/etc/nginx/nginx.conf ~/nginx/conf\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制容器的配置文件到本地")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("h3",{attrs:{id:"web-应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web-应用","aria-hidden":"true"}},[s._v("#")]),s._v(" web 应用")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker pull nginx:latest\ndocker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/html:usr/share/nginx/html docker.io/nginx --name nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# d:后台 p 8080:80 将本机8080映射到容器80端口 name nginx 容器名称 v 本机:容器")]),s._v("\ndocker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 -v ~/nginx/www:/usr/share/nginx/html -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/logs:/var/log/nginx nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定多个配置文件")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"docker建立私有仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker建立私有仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker建立私有仓库")]),s._v(" "),n("h3",{attrs:{id:"server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[s._v("#")]),s._v(" Server")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker pull registry:latest\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /xx/file\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建存储账户的文件夹路径")]),s._v("\ndocker run --entrypoint htpasswd registry -Bbn admin "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /xx/file/htpasswd\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户密码信息文件")]),s._v("\ndocker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry\n -v /xx/file/:/file/ \n -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REGISTRY_AUTH=htpasswd"')]),s._v(" \n -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm"')]),s._v("\n -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REGISTRY_AUTH_HTPASSWD_PATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/xx/file/htpasswd registry:latest\n\nsystemctl daemon-reload\nsystemctl restart docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问http://x.x.x.x:5000/v2/")]),s._v("\n\ndocker tag oracle/database:12.2.0.1-ee localhost:5000/oracle/database:12.2.0.1-ee\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将镜像打标签,在镜像名前添加私有库的名称localhost:5000")]),s._v("\ndocker push localhost:5000/oracle/database:12.2.0.1-ee\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交带有私有库名的镜像")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"cilent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cilent","aria-hidden":"true"}},[s._v("#")]),s._v(" Cilent")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker config 已说明,此处不重复")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/docker.service\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/dockerd --insecure-registry http://x.x.x.x\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"docker-gui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-gui","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker GUI")]),s._v(" "),n("p",[s._v("Portainer\n"),n("a",{attrs:{href:"https://portainer.io/install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方地址"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker volume create portainer_data\ndocker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问你的 IP:9000 即可进入容器管理页面")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"docker-安装ubuntu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装ubuntu","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 安装Ubuntu")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("docker pull dorowu/ubuntu-desktop-lxde-vnc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\ndocker run -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6080")]),s._v(":80 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5900")]),s._v(":5900 -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VNC_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("VNC登录的密码 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RESOLUTION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1920x1080 -v /dev/shm:/dev/shm dorowu/ubuntu-desktop-lxde-vnc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行容器 6080为web版本vnc")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"ex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ex","aria-hidden":"true"}},[s._v("#")]),s._v(" ex")])])}),[],!1,null,null,null);a.default=e.exports}}]);