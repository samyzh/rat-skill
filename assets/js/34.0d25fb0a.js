(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{404:function(v,_,t){v.exports=t.p+"assets/img/171c6ebdfcff778f.df9b8fc7.png"},405:function(v,_,t){v.exports=t.p+"assets/img/171c75f24bd26b51.4970331c.png"},715:function(v,_,t){"use strict";t.r(_);var s=t(31),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[v._v("#")]),v._v(" 背景")]),v._v(" "),s("h3",{attrs:{id:"devops流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devops流程"}},[v._v("#")]),v._v(" "),s("code",[v._v("DevOps")]),v._v("流程")]),v._v(" "),s("p",[s("img",{attrs:{src:t(404),alt:"img"}})]),v._v(" "),s("p",[v._v("言归正传，"),s("strong",[v._v("当你进入一个新团队，前端从0开始，怎样从"),s("code",[v._v("DevOps")]),v._v("的角度去提高团队效能呢？")])]),v._v(" "),s("p",[s("code",[v._v("DevOps")]),v._v("核心思想就是："),s("strong",[v._v("“快速交付价值，灵活响应变化”")]),v._v("。其基本原则如下：")]),v._v(" "),s("ul",[s("li",[v._v("高效的协作和沟通；")]),v._v(" "),s("li",[v._v("自动化流程和工具；")]),v._v(" "),s("li",[v._v("快速敏捷的开发；")]),v._v(" "),s("li",[v._v("持续交付和部署；")]),v._v(" "),s("li",[v._v("不断学习和创新。")])]),v._v(" "),s("p",[s("img",{attrs:{src:t(405),alt:"img"}})]),v._v(" "),s("p",[v._v("接下来将从"),s("strong",[v._v("协作、构建、测试、部署、运维")]),v._v("行五个方面谈谈，快速打造用于中小团队的前端基建。")]),v._v(" "),s("h2",{attrs:{id:"效率沟通工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效率沟通工具"}},[v._v("#")]),v._v(" 效率沟通工具")]),v._v(" "),s("table",[s("thead",[s("tr",[s("th",[v._v("沟通")]),v._v(" "),s("th",[v._v("项目管理")])])]),v._v(" "),s("tbody",[s("tr",[s("td",[v._v("企业微信")]),v._v(" "),s("td",[v._v("Teambition")])]),v._v(" "),s("tr",[s("td",[v._v("钉钉")]),v._v(" "),s("td",[v._v("Tapd")])])])]),v._v(" "),s("h2",{attrs:{id:"三层代码规范约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三层代码规范约束"}},[v._v("#")]),v._v(" 三层代码规范约束")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("第一层，"),s("code",[v._v("ESLint")])])]),v._v(" "),s("li",[s("p",[v._v("第二层，"),s("code",[v._v("Git Hooks")]),v._v("。")]),v._v(" "),s("p",[s("code",[v._v("git")]),v._v(" 自身包含许多 "),s("code",[v._v("hooks")]),v._v("，在 "),s("code",[v._v("commit")]),v._v("，"),s("code",[v._v("push")]),v._v(" 等 "),s("code",[v._v("git")]),v._v(" 事件前后触发执行。")]),v._v(" "),s("p",[v._v("而"),s("code",[v._v("husky")]),v._v("能够防止不规范代码被"),s("code",[v._v("commit")]),v._v("、"),s("code",[v._v("push")]),v._v("、"),s("code",[v._v("merge")]),v._v("等等。")])]),v._v(" "),s("li",[s("p",[v._v("第三层，"),s("code",[v._v("CI")]),v._v("(持续集成)。")]),v._v(" "),s("p",[v._v("前两步的校验可以手动跳过（找骂），但"),s("code",[v._v("CI")]),v._v("中的校验是绝对绕不过的，因为它在服务端校验。使用 "),s("code",[v._v("gitlab CI")]),v._v(" 做持续集成，配置文件 "),s("code",[v._v(".gitlab-ci.yaml")]),v._v(" 如下所示:")]),v._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[v._v("lint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("\n  stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("lint\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[v._v("only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("-")]),v._v("/^feature\\/."),s("span",{pre:!0,attrs:{class:"token important"}},[v._v("*$/")]),v._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[v._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("-")]),v._v("npmlint\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br"),s("span",{staticClass:"line-number"},[v._v("3")]),s("br"),s("span",{staticClass:"line-number"},[v._v("4")]),s("br"),s("span",{staticClass:"line-number"},[v._v("5")]),s("br"),s("span",{staticClass:"line-number"},[v._v("6")]),s("br")])]),s("p",[v._v("这层校验，一般在稍大点的企业中，会由运维部的配置组完成。")])])]),v._v(" "),s("h2",{attrs:{id:"统一前端物料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统一前端物料"}},[v._v("#")]),v._v(" 统一前端物料")]),v._v(" "),s("blockquote",[s("p",[v._v("公共组件、公共UI、工具函数库、第三方sdk等该如何规范？")])]),v._v(" "),s("h3",{attrs:{id:"快速封装部门ui组件库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速封装部门ui组件库"}},[v._v("#")]),v._v(" 快速封装部门UI组件库")]),v._v(" "),s("p",[s("code",[v._v("Storybook")]),v._v("是一个开源工具，用于独立开发"),s("code",[v._v("React、Vue")]),v._v("和"),s("code",[v._v("Angular")]),v._v("的"),s("code",[v._v("UI")]),v._v("组件。它能有组织和高效地构建UI组件。")]),v._v(" "),s("p",[s("code",[v._v("Storybook")]),v._v("提供了一个沙箱，用于隔离地构建UI组件。")]),v._v(" "),s("p",[v._v("类似于组件库的官方文档，却更加强大。可以通过控件和对出入参数调整，快速查看组件的用法，测试也可以对组件功能完整性等做校验。")]),v._v(" "),s("p",[v._v("一般的建议步骤是：")]),v._v(" "),s("ol",[s("li",[v._v("将业务从公共组件中抽离出来。")]),v._v(" "),s("li",[v._v("在项目中安装"),s("code",[v._v("StoryBook")]),v._v("(多项目时另起)")]),v._v(" "),s("li",[v._v("按官方文档标准，创建"),s("code",[v._v("stories")]),v._v("，并设定参数（同时也建议先写"),s("code",[v._v("Jest")]),v._v("测试脚本），写上必要的注释。")]),v._v(" "),s("li",[v._v("为不同组件配置"),s("code",[v._v("StoryBook")]),v._v("控件，最后部署。")])]),v._v(" "),s("h3",{attrs:{id:"统一所用的工具函数库和第三方sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统一所用的工具函数库和第三方sdk"}},[v._v("#")]),v._v(" 统一所用的工具函数库和第三方"),s("code",[v._v("sdk")])]),v._v(" "),s("p",[v._v("其实这里更多的是沟通的问题，首先需要明确的几点：")]),v._v(" "),s("ul",[s("li",[v._v("部门内对约定俗成的工具库要有提前沟通，不能这头装一个"),s("code",[v._v("MomentJs")]),v._v("，另一头又装了"),s("code",[v._v("DayJS")]),v._v("。一般的原则是：轻量的自己写，超过可接受大小的找替代，譬如:"),s("code",[v._v("DayJS")]),v._v("替代"),s("code",[v._v("MomentJs")]),v._v("，"),s("code",[v._v("ImmerJS")]),v._v("替代"),s("code",[v._v("immutableJS")]),v._v("等。")]),v._v(" "),s("li",[v._v("部门间的有登录机制，请求库封装协议等。如果是"),s("code",[v._v("SSO")]),v._v("/扫码登录等，就协定只用一套，不允许后端随意变动。如果是请求库封装，就必须要后端统一"),s("code",[v._v("Restful")]),v._v("风格，相信我，不用"),s("code",[v._v("Restful")]),v._v("规范的团队都是灾难。前端联调会生不如死。")]),v._v(" "),s("li",[s("code",[v._v("Mock")]),v._v("方式、路由管理以及样式写法也应当统一。")])]),v._v(" "),s("h2",{attrs:{id:"在团队外促进协作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在团队外促进协作"}},[v._v("#")]),v._v(" 在团队外促进协作")]),v._v(" "),s("p",[v._v("核心原则就是："),s("strong",[v._v("“能用文档解决的就尽量别BB。”")])]),v._v(" "),s("p",[v._v("虽说现今前端的地位愈发重要，但我们经常在项目开发中遇到以下问题：")]),v._v(" "),s("ul",[s("li",[v._v("不同的后端接口规范不一样，前端需要耗费大量时间去做数据清洗兼容。")]),v._v(" "),s("li",[v._v("前端静态页开发完了，后端迟迟不给接口，因为没有接口文档，天天都得问。")]),v._v(" "),s("li",[v._v("测试反馈的问题，在原型上没有体现。")])]),v._v(" "),s("h3",{attrs:{id:"首先是原型方面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首先是原型方面"}},[v._v("#")]),v._v(" 首先是原型方面：")]),v._v(" "),s("ol",[s("li",[v._v("一定要看明白产品给的原型文档！！！多问多沟通，这太重要了。")]),v._v(" "),s("li",[v._v("好的产品一般都会提供项目流程详图，但前端还是需要基于实际，做一张页面流程图。")]),v._v(" "),s("li",[v._v("要产品提供具体字段类型相关定义，不然得和后端扯皮。。。")])]),v._v(" "),s("h3",{attrs:{id:"其次是后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其次是后端"}},[v._v("#")]),v._v(" 其次是后端：")]),v._v(" "),s("ol",[s("li",[v._v("执行"),s("code",[v._v("Restful")]),v._v("接口规范，不符合规范的接口驳回。\n"),s("ul",[s("li",[v._v("劝退师就经历过，前东家有个"),s("code",[v._v("JAVA")]),v._v("架构师，连跨域和"),s("code",[v._v("Restful")]),v._v("都不知道，定的规范不成规范，一个简单查询接口返回五六级，其美名曰：“结构化数据”。")]),v._v(" "),s("li",[v._v("遇到这种沉浸于自己世界不听劝的后端，我只有一句劝：要么把他搞走，要么跑路吧。")])])]),v._v(" "),s("li",[v._v("必要的接口文档站点与API测试（如"),s("code",[v._v("Swagger")]),v._v(", "),s("code",[v._v("Apidoc")]),v._v("，不接受文件传输形式的接口。\n"),s("ul",[s("li",[v._v("早期的联调都是通过呐喊告知对方接口的标准。刚开始有什么不清楚的直接问就好了，但是到了后面的时候连写接口代码的那个人都忘了这接口怎么用，维护成本巨高。")]),v._v(" "),s("li",[v._v("在没有接口文档站点出现前，接口文档以"),s("code",[v._v("word")]),v._v("文档出现，辅以"),s("code",[v._v("postman")]),v._v("、"),s("code",[v._v("http")]),v._v("、"),s("code",[v._v("curl")]),v._v("等工具去测试。但仍然不够直观，维护起来也难。")]),v._v(" "),s("li",[v._v("以web交互为主的"),s("code",[v._v("Swagger")]),v._v("解决了测试，维护以及实时性的问题。从一定程度上也避免了扯皮问题：只有你后端没更新文档，这联调滞后时间就不该由前端担起。")])])])]),v._v(" "),s("h3",{attrs:{id:"然后是测试方面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#然后是测试方面"}},[v._v("#")]),v._v(" 然后是测试方面：")]),v._v(" "),s("ol",[s("li",[v._v("为了避免测试提出一些无效的bug，最好提前参与测试的用例评审。")]),v._v(" "),s("li",[v._v("在实际开发中，如果有不合理功能需要修改，所有的修改都必须要求产品经理更新到PRD以及原型设计中。否则，测试如果不知道的话，会认为是bug。")]),v._v(" "),s("li",[v._v("通过自测和编写"),s("code",[v._v("Jest")]),v._v("单元测试，将代码意外"),s("code",[v._v("bug")]),v._v("降到合理程度。")]),v._v(" "),s("li",[v._v("和测试一起吐槽后端的接口规范（滑稽）。")])]),v._v(" "),s("h3",{attrs:{id:"最后是运维方面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后是运维方面"}},[v._v("#")]),v._v(" 最后是运维方面：")]),v._v(" "),s("ol",[s("li",[v._v("除了"),s("code",[v._v("CI/CD")]),v._v("相关的，其实很可以和运维一起写写"),s("code",[v._v("nginx")]),v._v("和插件开发。")])]),v._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[v._v("#")]),v._v(" 参考链接")]),v._v(" "),s("p",[v._v("https://juejin.cn/post/6844904145602740231")])])}),[],!1,null,null,null);_.default=a.exports}}]);