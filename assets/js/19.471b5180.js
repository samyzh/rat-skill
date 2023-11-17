(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{690:function(t,_,v){t.exports=v.p+"assets/img/image-20201121145231554.a8a23c5e.png"},691:function(t,_,v){t.exports=v.p+"assets/img/image-20201121142851971.d7728089.png"},692:function(t,_,v){t.exports=v.p+"assets/img/hotkey.41ddbd7d.png"},693:function(t,_,v){t.exports=v.p+"assets/img/hotkey2.3cd80eec.png"},838:function(t,_,v){"use strict";v.r(_);var r=v(31),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一-前期准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-前期准备"}},[t._v("#")]),t._v(" 一.前期准备")]),t._v(" "),r("blockquote",[r("p",[t._v("点击链接自行下载")])]),t._v(" "),r("ul",[r("li",[t._v("md编写工具："),r("a",{attrs:{href:"https://typora.io/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Typora")]),r("OutboundLink")],1),t._v("；")]),t._v(" "),r("li",[t._v("git提交工具："),r("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("SourceTree")]),r("OutboundLink")],1),t._v("/"),r("a",{attrs:{href:"https://tortoisegit.org/download/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Tortoisegit")]),r("OutboundLink")],1),t._v(" 等；或直接用"),r("code",[t._v("git.sh")]),t._v("脚本也可提交；")]),t._v(" "),r("li",[t._v("克隆下在线文档项目，用Typora打开进入"),r("code",[t._v("docs")]),t._v("目录下，在对应的目录下添加待编码前缀的文档或者文件；")])]),t._v(" "),r("h2",{attrs:{id:"二-typora配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-typora配置"}},[t._v("#")]),t._v(" 二.Typora配置")]),t._v(" "),r("h3",{attrs:{id:"_1-图片路径设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-图片路径设置"}},[t._v("#")]),t._v(" 1.图片路径设置")]),t._v(" "),r("blockquote",[r("p",[t._v("约定把文章相关的图片放在当前文章同级目录"),r("code",[t._v("_image")]),t._v("目录下;统一放在"),r("code",[t._v("_image")]),t._v("一级目录下；")]),t._v(" "),r("p",[t._v("路径示范: "),r("code",[t._v("./image/xxx.png")]),t._v("; 使用严格的相对路径；")])]),t._v(" "),r("p",[t._v("打开Typora中"),r("code",[t._v("偏好设置")]),t._v("，进行图像设置；")]),t._v(" "),r("p",[r("img",{attrs:{src:v(690),alt:"image-20201121145231554"}})]),t._v(" "),r("p",[t._v("如设置后，以后拷贝有图片的文档或者图片，工具会提示是否拷贝到"),r("code",[t._v("_image")]),t._v("文件目录下；")]),t._v(" "),r("p",[r("img",{attrs:{src:v(691),alt:"image-20201121142851971"}})]),t._v(" "),r("p",[t._v("Ps: 一定要设置图片的路径为"),r("code",[t._v("./image/xxx")]),t._v("的相对路径；要不然本地图片可显示，在线文档时就显示不了；【要点】,如果是拷贝过去内容或者包含图片时，要认为手动替换下文件路径；")]),t._v(" "),r("p",[t._v("现在已经优化后，配置好Typora中"),r("code",[t._v("偏好设置")]),t._v("图片路径后，直接处理既可线上显示；")]),t._v(" "),r("h3",{attrs:{id:"_2-常用快捷键"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用快捷键"}},[t._v("#")]),t._v(" 2.常用快捷键")]),t._v(" "),r("p",[r("img",{attrs:{src:v(692),alt:"img"}})]),t._v(" "),r("p",[r("img",{attrs:{src:v(693),alt:"img"}})]),t._v(" "),r("h2",{attrs:{id:"三-编写"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-编写"}},[t._v("#")]),t._v(" 三.编写")]),t._v(" "),r("blockquote",[r("p",[t._v("详细操作可见下面视频示范")])]),t._v(" "),r("h3",{attrs:{id:"_1-word文档手动转换成md文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-word文档手动转换成md文档"}},[t._v("#")]),t._v(" 1.word文档手动转换成md文档")]),t._v(" "),r("ul",[r("li",[t._v("在typora上新建一个对应word文件的文档，记得文档名要加前缀；")]),t._v(" "),r("li",[t._v("把word的文档内容拷贝到新md文档；接下来要修改的步骤；\n"),r("ul",[r("li",[t._v("全局搜索替换文章中的图片路径, 【"),r("code",[t._v("(_image")]),t._v("===> "),r("code",[t._v("(./_image")]),t._v("】  ps: 如果全局复制的图片不清晰的话，就只能一个个从word复制到md中；")]),t._v(" "),r("li",[t._v("优化文章中相关的代码及sql语句，使其代码高亮；")]),t._v(" "),r("li",[t._v("修改原word文档中加粗的字体，在md文件上错乱；切换到源码模式"),r("code",[t._v("ctrl +/")]),t._v(",移除多余的/或者*;")]),t._v(" "),r("li",[t._v("对于原有word文档中有附件的话，要给附件另起新文章，再通过链接到新附件；"),r("code",[t._v("[附件文档](/pages/sysLink)")]),t._v("；")])])])]),t._v(" "),r("h3",{attrs:{id:"_2-直接编写md文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-直接编写md文档"}},[t._v("#")]),t._v(" 2.直接编写md文档")]),t._v(" "),r("h4",{attrs:{id:"_1-标题段落快捷键"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-标题段落快捷键"}},[t._v("#")]),t._v(" 1).标题段落快捷键")]),t._v(" "),r("p",[t._v("MarkDown支持六级标题，可以使用Ctrl+数字 指定不同层次的标题和段落")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("功能")]),t._v(" "),r("th",[t._v("快捷键")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("段落（正文）")]),t._v(" "),r("td",[t._v("Ctrl+0")])]),t._v(" "),r("tr",[r("td",[t._v("一级标题")]),t._v(" "),r("td",[t._v("Ctrl+1")])]),t._v(" "),r("tr",[r("td",[t._v("二级标题")]),t._v(" "),r("td",[t._v("Ctrl+2")])]),t._v(" "),r("tr",[r("td",[t._v("三–六级标题(以此类推)")]),t._v(" "),r("td",[t._v("Ctrl+3–6")])]),t._v(" "),r("tr",[r("td",[t._v("提升标题级别")]),t._v(" "),r("td",[t._v("Ctrl+‘+’")])]),t._v(" "),r("tr",[r("td",[t._v("降低标题级别")]),t._v(" "),r("td",[t._v("Ctrl+‘-’")])])])]),t._v(" "),r("h4",{attrs:{id:"_2-字体操作快捷键"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-字体操作快捷键"}},[t._v("#")]),t._v(" 2).字体操作快捷键")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("功能")]),t._v(" "),r("th",[t._v("快捷键")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("字体加粗")]),t._v(" "),r("td",[t._v("Ctrl+B")])]),t._v(" "),r("tr",[r("td",[t._v("下划线")]),t._v(" "),r("td",[t._v("Ctrl+U")])]),t._v(" "),r("tr",[r("td",[t._v("倾斜")]),t._v(" "),r("td",[t._v("Ctrl+I")])]),t._v(" "),r("tr",[r("td",[t._v("删除线")]),t._v(" "),r("td",[t._v("Alt+Shift+5")])])])]),t._v(" "),r("h4",{attrs:{id:"_3-插入功能快键键"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-插入功能快键键"}},[t._v("#")]),t._v(" 3).插入功能快键键")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("功能")]),t._v(" "),r("th",[t._v("快键键")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("插入图片(本地图片可直接拖入)")]),t._v(" "),r("td",[t._v("Ctrl+Shift+I")])]),t._v(" "),r("tr",[r("td",[t._v("插入表格")]),t._v(" "),r("td",[t._v("Ctrl+T")])]),t._v(" "),r("tr",[r("td",[t._v("插入有序列表")]),t._v(" "),r("td",[t._v("Ctrl+Shift+[")])]),t._v(" "),r("tr",[r("td",[t._v("插入无序列表")]),t._v(" "),r("td",[t._v("Ctrl+Shift+]")])]),t._v(" "),r("tr",[r("td",[t._v("插入超链接")]),t._v(" "),r("td",[t._v("Ctrl+K")])]),t._v(" "),r("tr",[r("td",[t._v("插入代码片")]),t._v(" "),r("td",[t._v("Ctrl+Shift+`")])]),t._v(" "),r("tr",[r("td",[t._v("插入代码块")]),t._v(" "),r("td",[t._v("Ctrl+Shift+K")])]),t._v(" "),r("tr",[r("td",[t._v("插入公式块")]),t._v(" "),r("td",[t._v("Ctrl+Shift+M")])]),t._v(" "),r("tr",[r("td",[t._v("插入引用块")]),t._v(" "),r("td",[t._v("Ctrl+Shift+Q")])])])]),t._v(" "),r("h2",{attrs:{id:"四-jks构建生产在线文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-jks构建生产在线文档"}},[t._v("#")]),t._v(" 四.jks构建生产在线文档")]),t._v(" "),r("ul",[r("li",[t._v("线上地址：详见各群公告")]),t._v(" "),r("li",[t._v("jenkins构建地址：详见各群公告；")])]),t._v(" "),r("h2",{attrs:{id:"五-视频演示操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五-视频演示操作"}},[t._v("#")]),t._v(" 五.视频演示操作")]),t._v(" "),r("bilibili",{attrs:{bvid:"BV1kv411b7Xh",page:1,highQuality:!0,danmaku:!0}})],1)}),[],!1,null,null,null);_.default=a.exports}}]);