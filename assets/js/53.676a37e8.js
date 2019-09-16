(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{271:function(t,a,v){"use strict";v.r(a);var _=v(1),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"赫夫曼树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#赫夫曼树","aria-hidden":"true"}},[t._v("#")]),t._v(" 赫夫曼树")]),t._v(" "),v("p",[t._v("赫夫曼树也叫做最优二叉树。")]),t._v(" "),v("h3",{attrs:{id:"名词解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#名词解释","aria-hidden":"true"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),v("p",[t._v("由2，3，5，6，8构成的最优二叉树，如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/%E8%B5%AB%E5%A4%AB%E6%9B%BC%E6%A0%91.png",alt:""}})]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("节点的权：")]),t._v(" 叶子节点的值")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("路径：")]),t._v(" 叶子结点与父节点的距离为1")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("路径长度：")]),t._v(" 指根节点到叶子节点的长度")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("带权的路径长度：")]),t._v(" 路径长度*节点的权")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("最优二叉树：")]),t._v(" 树的带权路径长度为树中所有叶子结点的带权路径长度之和最小。")])])]),t._v(" "),v("h3",{attrs:{id:"原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),v("ol",[v("li",[t._v("首先要求集合有序")]),t._v(" "),v("li",[t._v("取集合的两个最小值作为叶子节点，相加后得到的值插入有序集合，并删除原来的两个值")]),t._v(" "),v("li",[t._v("重复2步骤，直到集合只剩一下一个根元素即成为一颗二叉树，这就是最优二叉树")])]),t._v(" "),v("h2",{attrs:{id:"最优n叉树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最优n叉树","aria-hidden":"true"}},[t._v("#")]),t._v(" 最优N叉树")]),t._v(" "),v("h3",{attrs:{id:"原理-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原理-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),v("ol",[v("li",[t._v("首先要求集合有序")]),t._v(" "),v("li",[t._v("取最小的n个节点作为叶子节点，相加后得到的值插入有序集合，并删除原来的n个值")]),t._v(" "),v("li",[t._v("重复2步骤，直到集合只剩下一个根元素即成为一颗n叉树，前3步同最优二叉树的步骤一样")]),t._v(" "),v("li",[t._v("遍历节点判断是不是标准的n叉树（有孙子节点的节点必须有n个子）")]),t._v(" "),v("li",[t._v("取孙子节点的最大节点补充该节点")]),t._v(" "),v("li",[t._v("重复4，5步骤，直到所有有孙子节点的节点都有n个子节点，即完整的n叉树，也是最优n叉树")])]),t._v(" "),v("h3",{attrs:{id:"原理图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原理图","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理图")]),t._v(" "),v("p",[t._v("构建一颗三叉树，重复步骤1，2，3")]),t._v(" "),v("p",[v("img",{attrs:{src:"/%E4%B8%89%E5%8F%89%E6%A0%91-1.png",alt:""}})]),t._v(" "),v("p",[t._v("取孙子节点补齐98的子节点个数")]),t._v(" "),v("p",[v("img",{attrs:{src:"/%E4%B8%89%E5%8F%89%E6%A0%91-2.png",alt:""}})]),t._v(" "),v("p",[t._v("补齐节点31的子节点")]),t._v(" "),v("p",[v("img",{attrs:{src:"/%E4%B8%89%E5%8F%89%E6%A0%91-3.png",alt:""}})]),t._v(" "),v("p",[t._v("排序98的子节点，因为3个子都是节点类型，所以只排孙子节点就行了")]),t._v(" "),v("p",[v("img",{attrs:{src:"/%E4%B8%89%E5%8F%89%E6%A0%91-4.png",alt:""}})]),t._v(" "),v("p",[t._v("重复步骤4，5，直到所有的节点都是有序的三叉树，最后即得最优三叉树。")])])}),[],!1,null,null,null);a.default=r.exports}}]);