(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{365:function(t,a,e){"use strict";e.r(a);var r=e(1),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"多路平衡归并排序（胜者树、败者树）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多路平衡归并排序（胜者树、败者树）","aria-hidden":"true"}},[t._v("#")]),t._v(" 多路平衡归并排序（胜者树、败者树）")]),t._v(" "),e("pre",[e("code",[t._v("多路归并排序用作大数据集合的排序，通常因为内存资源不足，只能分段排序。\n多路归并通常结合二叉树进行排序即败者树与胜者树。\n")])]),t._v(" "),e("p",[e("strong",[t._v("胜者树：")]),t._v(" 每次筛选最小值作为根结点")]),t._v(" "),e("p",[e("strong",[t._v("败者树：")]),t._v(" 每次筛选最大值作为根节点")]),t._v(" "),e("h3",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("pre",[e("code",[t._v("1. 将无序数组分割成多个无序数组，分割成N个就是N路排序\n2. 取每个无序数组的第一个元素两两排序，选取最小值或最大值，同附近的两两排序结果再次比较，直到选出最小值\n3. 将最小值放在有序集合中，并将原最小值的位置替换为该无序数组段的下一个元素\n4. 重复2-3步骤，直到全部排序完成\n")])]),t._v(" "),e("h3",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);