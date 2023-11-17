(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{487:function(s,a,t){s.exports=t.p+"assets/img/image-20220127193931087.3e3bda52.png"},488:function(s,a,t){s.exports=t.p+"assets/img/image-20220119191126742.de5104ab.png"},775:function(s,a,t){"use strict";t.r(a);var e=t(31),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"docker管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker管理"}},[s._v("#")]),s._v(" docker管理")]),s._v(" "),e("h3",{attrs:{id:"portainer安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#portainer安装"}},[s._v("#")]),s._v(" portainer安装")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/wdp-docker-bak/portainer "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(":1000 /home/wdp-docker-bak/portainer\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9988")]),s._v(":9000 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /var/run/docker.sock:/var/run/docker.sock "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /home/wdp-docker-bak/portainer:/data  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --name wdp-portainer "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    docker.io/portainer/portainer-ce \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"docker加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker加速"}},[s._v("#")]),s._v(" docker加速")]),s._v(" "),e("blockquote",[e("h4",{attrs:{id:"腾讯云"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云"}},[s._v("#")]),s._v(" 腾讯云")])]),s._v(" "),e("p",[e("code",[s._v("suodo vim /etc/docker/daemon.json")]),s._v("; 如为默认 {}内容则直接替换即可")]),s._v(" "),e("p",[s._v("注意: 一定要保证该文件符合 json 规范，否则 Docker 将不能启动。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mirror.ccs.tencentyun.com"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("重启docker后查询pull即可")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("systemctl restart docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"dockerhub-jks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerhub-jks"}},[s._v("#")]),s._v(" DockerHub&JKS")]),s._v(" "),e("h3",{attrs:{id:"docker-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry"}},[s._v("#")]),s._v(" docker-registry")]),s._v(" "),e("h4",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/wdp-docker-bak/registry "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(":1000 /home/wdp-docker-bak/registry\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 -v /home/wdp-docker-bak/registry:/var/lib/registry --restart always --name wdp-registry registry:2.7.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"相关操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关操作"}},[s._v("#")]),s._v(" 相关操作")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拉取公共的")]),s._v("\ndocker pull hello-world\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重命名本地镜像名字")]),s._v("\ndocker tag hello-world:latest "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.45")]),s._v(".xxx.116:5000/hello-world:latest\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#推送本地镜像到私库")]),s._v("\ndocker push "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.45")]),s._v(".xxx.116:5000/hello-world:latest\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可能会报错；")]),s._v("\nsystemctl restart docker\ndocker push "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.45")]),s._v(".xxx.116:5000/hello-world:latest\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XGET http://10.45.xxx.116:5000/v2/_catalog\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若成功会返回以下值")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#{"repositories":["hello-world","nginxtest"]}')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://10.45.xxx.116:5000/v2/hello-world/tags/list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#{"name":"hello-world","tags":["latest"]}')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#也可通浏览器直接访问")]),s._v("\nhttp://10.45.xxx.116:5000/v2/_catalog\nhttp://10.45.xxx.116:5000/v2/xxx/tags/list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("移除相关命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker container stop wdp-registry "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" docker container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -v wdp-registry\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果需要删除私有仓库中的镜像,有一个简单的方法在运行registry时挂载在本地的目录[/home/wdp-docker-bak/registry]中，找到指定的镜像存放的目录来进行删除。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/wdp-docker-bak/registry\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nblobs  repositories\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" repositories/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nnginx\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf nginx/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("删除后再次查看私有仓库中的镜像是否还存在：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://172.16.1.xxx:5000/v2/_catalog\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repositories"')]),s._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("备份重新上传其他必要镜像：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker push "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.45")]),s._v(".xx.116:5000/mysql:5.7\ndocker push "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.45")]),s._v(".xx.116:5000/registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:v2.16.6\ndocker push "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.45")]),s._v(".xx.116:5000/wdp-runtime:1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"docker-harbor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-harbor"}},[s._v("#")]),s._v(" docker-harbor")]),s._v(" "),e("p",[e("img",{attrs:{src:t(487),alt:"image-20220127193931087"}})]),s._v(" "),e("h3",{attrs:{id:"jks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jks"}},[s._v("#")]),s._v(" Jks")]),s._v(" "),e("blockquote",[e("h5",{attrs:{id:"最后考虑不做成镜像安装方式-直接用war启动-方便跟宿主机公用命令操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后考虑不做成镜像安装方式-直接用war启动-方便跟宿主机公用命令操作"}},[s._v("#")]),s._v(" 最后考虑不做成镜像安装方式；直接用war启动，方便跟宿主机公用命令操作；")])]),s._v(" "),e("h4",{attrs:{id:"安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#需要修改下目录权限, 因为当映射本地数据卷时，/home/docker/jenkins目录的拥有者为root用户，而容器中jenkins user的uid为1000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/wdp-docker-bak/jenkins "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(":1000 /home/wdp-docker-bak/jenkins\ndocker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8877")]),s._v(":8080 --name wdp-jenkins -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 -v /home/wdp-docker-bak/jenkins:/var/jenkins_home jenkins/jenkins:lts\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[s._v("#")]),s._v(" 构建")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKSPACE")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" wdp-runtime\ndocker build --no-cache -t wdp-xxxx:1.0 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker build -t 192.168.1.121:5000/hxkg-tomcat-8.5 .")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#docker push  192.168.1.121:5000/hxkg-tomcat-8.5 ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("因用docker安装的jks内部没有docker；要考虑安装docker；通过远程宿主方式处理；")]),s._v(" "),e("p",[e("img",{attrs:{src:t(488),alt:"image-20220119191126742"}})]),s._v(" "),e("p",[s._v("版本固定："),e("code",[s._v("10.45.xxx.116:5000/wdp-jks:v${BUILD_NUMBER}")])])])}),[],!1,null,null,null);a.default=n.exports}}]);