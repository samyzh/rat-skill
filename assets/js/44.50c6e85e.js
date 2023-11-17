(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{673:function(s,a,t){s.exports=t.p+"assets/img/image-20210120104820478.345c055b.png"},674:function(s,a,t){s.exports=t.p+"assets/img/image-20210120104943918.6b05cc73.png"},813:function(s,a,t){"use strict";t.r(a);var n=t(31),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("p",[s._v("了解项目，模块，页面的三者关系；")]),s._v(" "),n("p",[s._v("示范模版：")]),s._v(" "),n("ul",[n("li",[s._v("以"),n("code",[s._v("bdp-tpl-sub")]),s._v("模版为项目；")]),s._v(" "),n("li",[s._v("以"),n("code",[s._v("module-base-blk")]),s._v("模版为模块；")]),s._v(" "),n("li",[s._v("以"),n("code",[s._v("page-table-cate")]),s._v("模版为页面；")])]),s._v(" "),n("h2",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),n("p",[s._v("安装脚手架及相关模版（项目，模块，页面）")]),s._v(" "),n("h3",{attrs:{id:"安装脚手架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装脚手架"}},[s._v("#")]),s._v(" 安装脚手架")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("nrm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" bdp http://172.21.64.25:7373/\nnrm use bdp\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g bdp-cli\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"权限准备-gitlab内网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限准备-gitlab内网"}},[s._v("#")]),s._v(" 权限准备(gitlab内网)")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("找管理员配置相应模板的权限；")])]),s._v(" "),n("li",[n("p",[s._v("第一次启动命令，"),n("code",[s._v("bdp init")]),s._v(";")])]),s._v(" "),n("li",[n("p",[s._v("访问令牌还得修改下，之前默认的可能已经过期；生产token后，拷贝替换"),n("code",[s._v(".bdprc")]),s._v("中的token; （不配置的话，会提示网络错误）")]),s._v(" "),n("p",[n("img",{attrs:{src:t(673),alt:"image-20210120104820478"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(674),alt:"image-20210120104943918"}})])]),s._v(" "),n("li",[n("p",[s._v("再运行初始化项目命令，按照提示操作；")])])]),s._v(" "),n("h3",{attrs:{id:"安装相关模版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装相关模版"}},[s._v("#")]),s._v(" 安装相关模版")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("bdp tpl "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择 `bdp-tpl-sub`")]),s._v("\nbdp blk "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择 `module-base-blk` `page-table-cate`")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"命令初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令初始化"}},[s._v("#")]),s._v(" 命令初始化")]),s._v(" "),n("h3",{attrs:{id:"初始化项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("➜  bdp-ztest bdp tpl "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n✔ 获取repos中 \n? 请选择要安装的repo? bdp-tpl-sub\n⠋ 下载中 bdp-tpl-sub\n⠙ 下载中 bdp-tpl-subCloning into "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/samy/.bdp/tpl/bdp-tpl-sub'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n✔ 下载完成 bdp-tpl-sub\n➜  bdp-ztest bdp init tpl\n? 请输入 Project 名 realtime-react\n? 想初始化到哪个本地 Project 目录下? bdp-tpl-sub\n? 项目路径名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" realtime-react\n? 子系统名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" realtime\n? 作者 yessz@foxmail.com\n✔ 👏 生成完成 realtime-react\n✔ copyed\n\n  项目生成成功 realtime-react, 然后进入目录安装依赖:\n       $ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" realtime-react "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"初始化模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化模块"}},[s._v("#")]),s._v(" 初始化模块")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("➜  realtime-react "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" src/pages/realtime\n➜  realtime bdp init\n? 请选择初始化的类型 initMod   初始化模块/Module\n? 请输入 Module 名 operation\n? 想初始化到哪个本地 Module 目录下? module-base-blk\n? 当前项目名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" realtime\n? 当前模块名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" taskMgt\n? 模块名标题"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 任务首页\n✔ 👏 生成完成 taskMgt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"初始化页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化页面"}},[s._v("#")]),s._v(" 初始化页面")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("➜  realtime cd taskMgt \n➜  taskMgt bdp init \n? 请选择初始化的类型 initPag   初始化页面/Page\n? 请输入 Page 名 list\n? 请选择模板文件哪个Page模板? page-table-card\n? 当前项目名(en) realtime\n? 当前模块名(en) taskMgt\n? 设置页面名(en) 列表首页\n? 页面名标题(cn) 页面示范\n✔ 👏生成完成 list\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"效果及教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果及教程"}},[s._v("#")]),s._v(" 效果及教程")]),s._v(" "),n("bilibili",{attrs:{bvid:"BV1Dr4y1P7mu",page:1,highQuality:!0,danmaku:!0}}),s._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),n("p",[s._v("https://my.samyz.cn/rat-skill/pages/784401/")]),s._v(" "),n("p",[s._v("https://my.samyz.cn/rat-skill/pages/8a923e/")]),s._v(" "),n("p",[s._v("https://my.samyz.cn/rat-skill/pages/cfc513/")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);