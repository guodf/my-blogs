(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{257:function(t,a,r){"use strict";r.r(a);var e=r(1),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"tcp粘包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp粘包","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP粘包")]),t._v(" "),r("h3",{attrs:{id:"什么是tcp粘包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是tcp粘包","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是TCP粘包")]),t._v(" "),r("p",[t._v("相邻的消息与前一个后者后一个消息的片段与当前消息一起发送道理客户端。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/socket/tcp%E7%B2%98%E5%8C%85.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"为什么会粘包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么会粘包","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么会粘包")]),t._v(" "),r("ol",[r("li",[t._v("操作系统为了优化传输速度会将小包可在一起发送，大包拆分发送的情况。")]),t._v(" "),r("li",[t._v("由于网卡传输接口大小的限制。")])]),t._v(" "),r("h3",{attrs:{id:"解决办法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决办法","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),r("h4",{attrs:{id:"_1-固定长度分割"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-固定长度分割","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 固定长度分割")]),t._v(" "),r("p",[t._v("每次发送固定长度的消息，长度不足时补0。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/socket/fixedlength.png",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"_2-分隔符分割"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-分隔符分割","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 分隔符分割")]),t._v(" "),r("p",[t._v("使用分隔符分割消息，比如："),r("code",[t._v("\\r")]),t._v("、"),r("code",[t._v("\\r\\n")]),t._v("、"),r("code",[t._v("@@$$")]),t._v("等，定义一个特殊的字符用来分割消息。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/socket/splitter.png",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"_3-自定义消息头分割"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义消息头分割","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 自定义消息头分割")]),t._v(" "),r("p",[t._v("消息开头固定n个字节用来记录消息的长度。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/socket/header.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("tcp通信的难点就在于粘包的处理，只要掌握常用的处理办法就可以轻松驾驭tcp了。")])])}),[],!1,null,null,null);a.default=s.exports}}]);