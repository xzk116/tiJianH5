(function(n){function e(e){for(var i,r,c=e[0],u=e[1],s=e[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(n[i]=u[i]);g&&g(e);while(l.length)l.shift()();return t.push.apply(t,s||[]),a()}function a(){for(var n,e=0;e<t.length;e++){for(var a=t[e],i=!0,c=1;c<a.length;c++){var u=a[c];0!==o[u]&&(i=!1)}i&&(t.splice(e--,1),n=r(r.s=a[0]))}return n}var i={},o={index:0},t=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(n){var e=[],a=o[n];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=o[n]=[e,i]}));e.push(a[2]=i);var t,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(n){return r.p+"static/js/"+({"pages-QRCode-QRCode~pages-QRupCode-QRupCode":"pages-QRCode-QRCode~pages-QRupCode-QRupCode","pages-QRCode-QRCode":"pages-QRCode-QRCode","pages-QRupCode-QRupCode~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian":"pages-QRupCode-QRupCode~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian","pages-QRupCode-QRupCode":"pages-QRupCode-QRupCode","pages-index-index~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian":"pages-index-index~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian","sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian":"sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian","sub-changguijiancha-changguijiancha":"sub-changguijiancha-changguijiancha","sub-yanbaojian-yanbaojian":"sub-yanbaojian-yanbaojian","pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-record-record":"pages-record-record","pages-setting-setting":"pages-setting-setting","pages-studentSearch-studentSearch":"pages-studentSearch-studentSearch"}[n]||n)+"."+{"pages-QRCode-QRCode~pages-QRupCode-QRupCode":"6e9052ff","pages-QRCode-QRCode":"a62c304a","pages-QRupCode-QRupCode~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian":"6d7d37bf","pages-QRupCode-QRupCode":"1cec4f2a","pages-index-index~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian":"9ef92259","sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian":"414ca77f","sub-changguijiancha-changguijiancha":"4d9c6c17","sub-yanbaojian-yanbaojian":"6f1e180f","pages-index-index":"0b1f2182","pages-login-login":"387d0668","pages-record-record":"cb775645","pages-setting-setting":"4adf6162","pages-studentSearch-studentSearch":"50f376d7"}[n]+".js"}(n);var u=new Error;t=function(e){c.onerror=c.onload=null,clearTimeout(s);var a=o[n];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),t=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+t+")",u.name="ChunkLoadError",u.type=i,u.request=t,a[1](u)}o[n]=void 0}};var s=setTimeout((function(){t({type:"timeout",target:c})}),12e4);c.onerror=c.onload=t,document.head.appendChild(c)}return Promise.all(e)},r.m=n,r.c=i,r.d=function(n,e,a){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)r.d(a,i,function(e){return n[e]}.bind(null,i));return a},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="./",r.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var g=u;t.push([0,"chunk-vendors"]),a()})({0:function(n,e,a){n.exports=a("6604")},"3d7d":function(n,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={onShareAppMessage:function(n){return{}},onShareTimeline:function(n){return{}}}},"538b":function(n,e,a){var i=a("24fb");e=i(!1),e.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page{min-height:100vh;box-sizing:border-box}.my-btn{line-height:%?84?%;font-size:%?32?%;letter-spacing:%?2?%;border-radius:%?45?%;border:1px solid #ff6918}.my-btn[type="primary"]{background:#ff6918}.my-btn[type="success"]{color:#fff;border-color:#69c548;background:#69c548}.my-btn[type="danger"]{color:#fff;border-color:#ec475a;background:#ec475a}.my-btn[type="default"]{color:#ff6918;background:#fff}.my-btn[type="success"].button-hover{color:hsla(0,0%,100%,.6)}.my-btn::after{border:none}.my-img-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.25)}.exam-card .ec-head, .my-hz{display:flex;justify-content:center;align-items:center}.myBorderBottom{border-bottom:1px solid #f1f1f1}.myBorderTop{border-top:1px solid #f1f1f1}.supTitle{font-size:%?42?%}.bigTitle{font-size:%?36?%}.smTitle{font-size:%?32?%}.my-footer{position:fixed;bottom:0;left:0;right:0;background:#fff;z-index:99;padding:20px 15px;display:flex}.my-footer .mf-card{flex:1}.my-footer.mf-two .mf-card:nth-child(1){padding-right:%?20?%}.my-footer.mf-two .mf-card:nth-child(2){padding-left:%?20?%}.my-receipt{display:inline-block;background:#ff8d1a;font-size:%?20?%;padding:0 %?12?%;line-height:%?40?%;border-radius:%?6?%;vertical-align:%?4?%;color:#fff;-webkit-transform:scale(.8);transform:scale(.8)}.my-info-card{background:#fff;border-radius:%?20?%;padding:15px;box-sizing:border-box;letter-spacing:%?2?%;margin-bottom:15px}.my-info-card .mi-head{font-size:%?28?%;font-weight:700;margin-bottom:%?20?%}.my-info-card .mi-row{display:flex;line-height:%?60?%}.my-info-card .mi-row .mr-tit{width:%?200?%}.my-info-card .mi-row .mr-con{flex:1;letter-spacing:0;text-align:right}.my-info-card .mi-row .mr-more-row{line-height:%?40?%;padding-top:%?10?%}.pop-close{position:absolute;color:grey;top:3px;right:3px;font-size:%?36?%;width:%?70?%;height:%?70?%;display:flex;justify-content:center;align-items:center}.exam-card{border-radius:%?20?%;background:#fff;padding:20px 15px;margin-bottom:15px}.exam-card .ec-tit{font-size:%?36?%;font-weight:500;letter-spacing:%?2?%;margin-right:%?10?%}.exam-card .my-hz{margin:0}.exam-card .ec-main{margin:%?20?% 0 0;display:flex;justify-content:space-between;align-items:center;overflow-x:auto}.exam-card .ec-main.oneCard{justify-content:center}.exam-card .ec-main .ec-between{width:%?30?%}.exam-card .ec-main .ec-card{border:1px solid #f1f1f1}.exam-card .ec-main .ec-img{width:100%;height:100%}.exam-card .ec-footer{margin-top:%?20?%;text-align:center}.headShadow{box-shadow:0 1px 4px 0 rgba(0,0,0,.05)}.zs-span{display:inline-block;padding:%?6?% %?8?%;font-size:%?20?%;color:#fff;background:#ff8d1a;border-radius:%?8?%;margin-left:%?10?%}.my-search{width:100%;height:%?72?%;border-radius:%?36?%;position:relative;background:#fff}.my-search .uni-input{width:100%;height:100%;box-sizing:border-box;padding:0 %?80?%;font-size:%?24?%}.my-search .input-close{width:%?40?%;height:%?40?%;position:absolute;top:%?16?%;right:%?28?%}.my-search .search-icon{width:%?50?%;height:%?50?%;position:absolute;top:%?15?%;left:%?22?%}.my-hz{width:%?104?%;height:%?36?%;background:linear-gradient(232.33deg,#f5bd95,#f5dcc6);border-radius:%?8?%;margin:%?10?% 0 %?15?%;font-size:%?20?%;border:%?1?% solid #f5bd95}.my-hz.hide{visibility:hidden}.my-hz .hz-icon{width:%?26?%;height:%?24?%;margin-right:%?5?%}.search-empty{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;padding-top:%?100?%}.search-empty .empty-bg{width:%?400?%;height:%?350?%}.search-empty .empty-txt{text-align:center;color:#a6a6a6;letter-spacing:%?2?%;font-size:%?28?%}.gg-main{display:flex;flex-wrap:wrap;justify-content:space-between}.gg-main .item{width:48%;height:%?170?%;background:#fff;border-radius:%?15?%;position:relative;box-sizing:border-box;padding:10px;margin-bottom:%?15?%}.gg-main .item-name{color:#2b303e;letter-spacing:%?1?%;width:100%;font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:%?20?%}.gg-main .item-tip{font-size:%?24?%;color:#999;margin-bottom:%?8?%}.gg-main .item-tip:last-child{margin-bottom:0}\r\n/*全局设置*/uni-page-body{background:#fff;color:#333;font-size:%?28?%}body.?%PAGE?%{background:#fff}uni-image{vertical-align:top}\r\n/*每个页面公共css */',""]),n.exports=e},5668:function(n,e,a){"use strict";var i=a("8808"),o=a.n(i);o.a},6604:function(n,e,a){"use strict";var i=a("4ea4").default,o=i(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7fae"),a("1c31");var t=a("b28d"),r=a("7fdf"),c=i(a("3d7d")),u=i(a("e143")),s=i(a("bbc5"));u.default.config.productionTip=!1,u.default.prototype.$log=t.log,u.default.prototype.$myToast=r.myToast,s.default.mpType="app",u.default.mixin(c.default);var g=new u.default((0,o.default)((0,o.default)({},s.default),{},{share:c.default}));g.$mount()},"67b4":function(n,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={globalData:{showPrivacy:!1,systemInfo:uni.getSystemInfoSync(),uploadMethod:[1,2],camera:[1,2],pzHeight:0,info1:void 0,info2:void 0,options:void 0},onLaunch:function(){var n=this.globalData.systemInfo,e=Math.ceil(1056*n.windowWidth/780);this.globalData.pzHeight=e,console.log("App Launch"),uni.getPrivacySetting&&uni.getPrivacySetting({success:function(n){console.log("是否需要授权：",n.needAuthorization,"隐私协议的名称为：",n.privacyContractName),n.needAuthorization?getApp().globalData.showPrivacy=!0:getApp().globalData.showPrivacy=!1},fail:function(){},complete:function(){}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=i},"7fae":function(n,e,a){"use strict";(function(n){var e=a("4ea4").default;a("13d5"),a("d3b7"),a("ddb0"),a("ac1f"),a("5319");var i=e(a("e143")),o={keys:function(){return[]}};n["____7B5EDE8____"]=!0,delete n["____7B5EDE8____"],n.__uniConfig={preloadRule:{"pages/index/index":{network:"all",packages:["sub"]}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"全球签证照片制作",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#F8F8F8"},condition:{current:0,list:[{name:"",path:"pages/index/index"}]}},n.__uniConfig.compilerVersion="3.99",n.__uniConfig.darkmode=!1,n.__uniConfig.themeConfig={},n.__uniConfig.uniPlatform="h5",n.__uniConfig.appId="__UNI__7B5EDE8",n.__uniConfig.appName="request-1",n.__uniConfig.appVersion="1.0.0",n.__uniConfig.appVersionCode="100",n.__uniConfig.router={mode:"hash",base:"./"},n.__uniConfig.publicPath="./",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.aMapKey=void 0,n.__uniConfig.aMapSecurityJsCode=void 0,n.__uniConfig.aMapServiceHost=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=o.keys().reduce((function(n,e){var a=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),i=o(e);return Object.assign(n[a]||(n[a]={}),i.common||i),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=a.e,i.default.component("pages-login-login",(function(n){var e={component:a.e("pages-login-login").then(function(){return n(a("f46c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-index-index",(function(n){var e={component:Promise.all([a.e("pages-index-index~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("pages-index-index")]).then(function(){return n(a("53ab"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-setting-setting",(function(n){var e={component:a.e("pages-setting-setting").then(function(){return n(a("7e8e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-record-record",(function(n){var e={component:a.e("pages-record-record").then(function(){return n(a("0e37"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-studentSearch-studentSearch",(function(n){var e={component:a.e("pages-studentSearch-studentSearch").then(function(){return n(a("2105"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-QRCode-QRCode",(function(n){var e={component:Promise.all([a.e("pages-QRCode-QRCode~pages-QRupCode-QRupCode"),a.e("pages-QRCode-QRCode")]).then(function(){return n(a("92e4"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-QRupCode-QRupCode",(function(n){var e={component:Promise.all([a.e("pages-QRupCode-QRupCode~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("pages-QRCode-QRCode~pages-QRupCode-QRupCode"),a.e("pages-QRupCode-QRupCode")]).then(function(){return n(a("90bd"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("sub-changguijiancha-changguijiancha",(function(n){var e={component:Promise.all([a.e("pages-index-index~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("pages-QRupCode-QRupCode~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("sub-changguijiancha-changguijiancha")]).then(function(){return n(a("208e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("sub-yanbaojian-yanbaojian",(function(n){var e={component:Promise.all([a.e("pages-index-index~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("pages-QRupCode-QRupCode~sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("sub-changguijiancha-changguijiancha~sub-yanbaojian-yanbaojian"),a.e("sub-yanbaojian-yanbaojian")]).then(function(){return n(a("edcc"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/login/login",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"幼儿园体检",enablePullDownRefresh:!1})},[n("pages-login-login",{slot:"page"})])}},meta:{id:1,name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"首页"})},[n("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",windowTop:44}},{path:"/pages/setting/setting",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"设置"})},[n("pages-setting-setting",{slot:"page"})])}},meta:{name:"pages-setting-setting",isNVue:!1,maxWidth:0,pagePath:"pages/setting/setting",windowTop:44}},{path:"/pages/record/record",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"体检录入"})},[n("pages-record-record",{slot:"page"})])}},meta:{name:"pages-record-record",isNVue:!1,maxWidth:0,pagePath:"pages/record/record",windowTop:44}},{path:"/pages/studentSearch/studentSearch",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"学生信息搜索"})},[n("pages-studentSearch-studentSearch",{slot:"page"})])}},meta:{name:"pages-studentSearch-studentSearch",isNVue:!1,maxWidth:0,pagePath:"pages/studentSearch/studentSearch",windowTop:44}},{path:"/pages/QRCode/QRCode",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"扫码",enablePullDownRefresh:!1})},[n("pages-QRCode-QRCode",{slot:"page"})])}},meta:{name:"pages-QRCode-QRCode",isNVue:!1,maxWidth:0,pagePath:"pages/QRCode/QRCode",windowTop:44}},{path:"/pages/QRupCode/QRupCode",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"上传二维码识别",enablePullDownRefresh:!1})},[n("pages-QRupCode-QRupCode",{slot:"page"})])}},meta:{name:"pages-QRupCode-QRupCode",isNVue:!1,maxWidth:0,pagePath:"pages/QRupCode/QRupCode",windowTop:44}},{path:"/sub/changguijiancha/changguijiancha",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"常规检查"})},[n("sub-changguijiancha-changguijiancha",{slot:"page"})])}},meta:{name:"sub-changguijiancha-changguijiancha",isNVue:!1,maxWidth:0,pagePath:"sub/changguijiancha/changguijiancha",windowTop:44}},{path:"/sub/yanbaojian/yanbaojian",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"眼保健"})},[n("sub-yanbaojian-yanbaojian",{slot:"page"})])}},meta:{name:"sub-yanbaojian-yanbaojian",isNVue:!1,maxWidth:0,pagePath:"sub/yanbaojian/yanbaojian",windowTop:44}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,a("c8ba"))},"7fdf":function(n,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.chooseImage=e.cameraAuth=e.JumpSpec=void 0,e.goBack=function(n){var e=getCurrentPages(),a=e[e.length-2];uni.navigateBack({delta:1,success:function(){n&&n(a.$vm)}})},e.jump401=e.isToken=e.isLogin=void 0,e.myLoading=function(n){var e={mask:!0,title:"加载中"};e=Object.assign(e,n),uni.showLoading(e)},e.myToast=function(n){var e={mask:!0,title:"操作成功",icon:"success",duration:1500};e=Object.assign(e,n),uni.showToast(e)},e.savePic=void 0;e.chooseImage=function(n){uni.chooseImage({count:1,sizeType:["original"],sourceType:["album"],success:function(e){n.success(e)},fail:function(e){n.fail&&n.fail(e)}})};e.cameraAuth=function(n){uni.getSetting({success:function(e){var a=e.authSetting["scope.camera"];a?n.success():uni.authorize({scope:"scope.camera",success:function(){n.success()},fail:function(){(function(){uni.showModal({title:"提示",content:"请在设置页面打开摄像头授权",confirmText:"去授权",cancelText:"取消",success:function(n){n.confirm&&uni.openSetting({success:function(n){}})}})})()}})}})};e.jump401=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";uni.showToast({title:"登录超时，请重新登录",icon:"none"}),uni.clearStorage(),setTimeout((function(){uni.redirectTo({url:"/pages/login/h5Login/h5Login?prevUrl=".concat(n)})}),1500)};e.isToken=function(){return!!uni.getStorageSync("token")||(uni.navigateTo({url:"/pages/login/login?isBack=1"}),!1)};e.isLogin=function(){return!!uni.getStorageSync("token")};var i=function n(e,a){console.log(e,a),uni.showLoading({mask:!0,title:"正在保存"}),uni.downloadFile({url:a[e],success:function(i){200===i.statusCode&&uni.saveImageToPhotosAlbum({filePath:i.tempFilePath,success:function(){e===a.length-1?uni.showToast({mask:!0,title:"保存成功"}):n(e+1,a)},fail:function(n){uni.hideLoading(),103!==n.errno&&"saveImageToPhotosAlbum:fail auth deny"!==n.errMsg||o(a)}})},fail:function(){uni.showToast({mask:!0,title:"保存图片失败",icon:"none"})}})};function o(n){uni.showModal({title:"提示",content:"请在设置页面打开相册授权",confirmText:"去授权",cancelText:"取消",success:function(e){e.confirm?uni.openSetting({success:function(e){i(0,n)}}):e.cancel}})}e.savePic=i;e.JumpSpec=function(n){var e={};1==n.needWriteProvince?e.needWriteProvince=!0:e.needWriteProvince=!1,1==n.needWriteCity?e.needWriteCity=!0:e.needWriteCity=!1,1==n.needWriteHouseholdRegistration?e.needWriteHouseholdRegistration=!0:e.needWriteHouseholdRegistration=!1,1==n.needWriteName?e.needWriteName=!0:e.needWriteName=!1,1==n.needWriteIdentityType?e.needWriteIdentityType=!0:e.needWriteIdentityType=!1,1==n.needWriteLicenseNumber?e.needWriteLicenseNumber=!0:e.needWriteLicenseNumber=!1,1==n.networkVerification?e.networkVerification=!0:e.networkVerification=!1,1==n.hasReceipt?e.hasReceipt=!0:e.hasReceipt=!1,n.detectModelList&&n.detectModelList.length?e.detectModelList=n.detectModelList:e.detectModelList=[],getApp().globalData.info1=e,e.needWriteProvince||e.needWriteCity||e.needWriteHouseholdRegistration||e.needWriteName||e.needWriteIdentityType||e.needWriteLicenseNumber?uni.navigateTo({url:"/pages/collect/information/information?id=".concat(n.id)}):uni.navigateTo({url:"/sub/guide1/guide?id=".concat(n.id)})}},8808:function(n,e,a){var i=a("538b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=a("4f06").default;o("1342e9e6",i,!0,{sourceMap:!1,shadowMode:!1})},aaa9:function(n,e,a){"use strict";a.r(e);var i=a("67b4"),o=a.n(i);for(var t in i)["default"].indexOf(t)<0&&function(n){a.d(e,n,(function(){return i[n]}))}(t);e["default"]=o.a},b28d:function(n,e,a){"use strict";a("498a"),a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.integer=e.getUUID=e.encodeParams=e.decodeParams=e.dealImage=e.checkIdCode=void 0,e.isEmail=function(n){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(n)},e.isMobile=function(n){return/^1[0-9]{10}$/.test(n)},e.log=function(){0},e.validateEmail=e.trim=e.setImgWidth=e.setImgHeight=e.prevImg=void 0,a("ac1f"),a("00b4"),a("5319"),a("e25e"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("466d"),a("a9e3"),a("d401"),a("d3b7");e.validateEmail=function(n){return!!/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]*[.]){1,63}[a-zA-Z0-9]+$/.test(n)};e.trim=function(n){return n.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g,"")};e.integer=function(n){return/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(n)};e.checkIdCode=function(n){if(n=n.toUpperCase(),!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(n))return!1;var e,a;if(null=={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[parseInt(n.substr(0,2))])return!1;if(e=n.length,15==e){a=new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);var i=n.match(a),o=new Date("19"+i[2]+"/"+i[3]+"/"+i[4]);if(u=o.getYear()==Number(i[2])&&o.getMonth()+1==Number(i[3])&&o.getDate()==Number(i[4]),u){var t=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),r=new Array("1","0","X","9","8","7","6","5","4","3","2"),c=0;for(n=n.substr(0,6)+"19"+n.substr(6,n.length-6),g=0;g<17;g++)c+=n.substr(g,1)*t[g];return n+=r[c%11],!0}return!1}if(18==e){a=new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);var u;i=n.match(a),o=new Date(i[2]+"/"+i[3]+"/"+i[4]);if(u=o.getFullYear()==Number(i[2])&&o.getMonth()+1==Number(i[3])&&o.getDate()==Number(i[4]),u){var s,g;t=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),r=new Array("1","0","X","9","8","7","6","5","4","3","2"),c=0;for(g=0;g<17;g++)c+=n.substr(g,1)*t[g];return s=r[c%11],s==n.substr(17,1)}return!1}return!1};e.dealImage=function(n,e,a){var i=new Image;i.src=n,i.onload=function(){var n=this.width,i=this.height,o=n/i;n=e.width||n,i=e.height||n/o;var t=document.createElement("canvas"),r=t.getContext("2d");t.width=n,t.height=i,r.drawImage(this,0,0,n,i);var c=.7;e.quality&&e.quality<=1&&e.quality>0&&(c=e.quality);var u=t.toDataURL("image/jpeg",c);a(u)}};e.prevImg=function(n){n&&(void 0).$wx.previewImage({current:"",urls:[n]})};e.getUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){return("x"===n?16*Math.random()|0:8).toString(16)}))};e.setImgHeight=function(n,e,a){uni.getImageInfo({src:n,success:function(n){var i=Math.ceil(n.height*e/n.width);a&&a(i)}})};e.setImgWidth=function(n,e,a){uni.getImageInfo({src:n,success:function(n){var i=Math.ceil(n.width*e/n.height);a&&a(i)}})};e.encodeParams=function(n){return encodeURIComponent(n)};e.decodeParams=function(n){return decodeURIComponent(n)}},bbc5:function(n,e,a){"use strict";a.r(e);var i=a("e1f6"),o=a("aaa9");for(var t in o)["default"].indexOf(t)<0&&function(n){a.d(e,n,(function(){return o[n]}))}(t);a("5668");var r=a("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports},e1f6:function(n,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var i=function(){var n=this.$createElement,e=this._self._c||n;return e("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},o=[]}});