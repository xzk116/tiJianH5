(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-QRupCode-QRupCode"],{"591a":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){}));var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"page"},[t("v-uni-view",{staticClass:"reader",attrs:{id:"reader"}}),t("v-uni-view",{staticClass:"login-btn",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.upPhoto.apply(void 0,arguments)}}},[n._v("上传扫码")]),t("v-uni-view",{staticClass:"infobox"},[n._v("二维码内容："+n._s(n.info))]),t("v-uni-view",{staticClass:"login-btn",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.authorizeBT.apply(void 0,arguments)}}},[n._v("搜索蓝牙（蓝牙只在小程序中生效）")])],1)},i=[]},"607c":function(n,e,t){"use strict";t("7a82");var o=t("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(t("c7eb")),c=o(t("1da1")),r=t("a11b"),a={data:function(){return{info:"",html5Qrcode:null}},methods:{upPhoto:function(n){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(){var n=(0,c.default)((0,i.default)().mark((function n(t){var o;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.tempFiles.length>0?(o=t.tempFiles[0],console.log("文件",o),e.infoCode(o)):console.error("未选择任何图片");case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fail:function(n){console.error("选择图片失败：",n)}})},infoCode:function(n){var e=this;this.html5Qrcode=new r.Html5Qrcode("reader"),this.html5Qrcode.scanFile(n,!0).then((function(n){console.log("二维码结果",n),e.info=n,e.html5Qrcode.clear()})).catch((function(n){console.log("识别失败: ".concat(n))}))},authorizeBT:function(){var n=this;uni.authorize({scope:"scope.bluetooth",success:function(){n.serchBT()},fail:function(n){console.error("用户拒绝授权",n)}})},serchBT:function(){uni.openBluetoothAdapter({success:function(n){console.log("初始化蓝牙适配器成功",n),uni.startBluetoothDevicesDiscovery({success:function(n){console.log("开始搜索蓝牙设备",n)},fail:function(n){console.log("搜索蓝牙设备失败",n)}})},fail:function(n){console.log("初始化蓝牙适配器失败",n)}})},closeBT:function(){uni.closeBluetoothAdapter({success:function(n){console.log("关闭蓝牙适配器成功",n)},fail:function(n){console.log("关闭蓝牙适配器失败",n)}})}}};e.default=a},"757e":function(n,e,t){var o=t("24fb");e=o(!1),e.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-0c4d52bd]{width:100%;height:calc(100vh - 44px);padding:%?30?%;box-sizing:border-box}.page .reader[data-v-0c4d52bd]{position:absolute;z-index:-100;top:0;left:0;opacity:0;width:0;height:0}.page .login-btn[data-v-0c4d52bd]{width:100%;height:%?90?%;background:#ff6918;border-radius:%?50?%;font-size:%?32?%;color:#fff;line-height:%?90?%;text-align:center;letter-spacing:%?2?%;margin-bottom:%?40?%}.page .infobox[data-v-0c4d52bd]{width:100%}',""]),n.exports=e},"90bd":function(n,e,t){"use strict";t.r(e);var o=t("591a"),i=t("c8a0");for(var c in i)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(c);t("f777");var r=t("f0c5"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"0c4d52bd",null,!1,o["a"],void 0);e["default"]=a.exports},a59d:function(n,e,t){var o=t("757e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("4f06").default;i("655f2b76",o,!0,{sourceMap:!1,shadowMode:!1})},c8a0:function(n,e,t){"use strict";t.r(e);var o=t("607c"),i=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=i.a},f777:function(n,e,t){"use strict";var o=t("a59d"),i=t.n(o);i.a}}]);