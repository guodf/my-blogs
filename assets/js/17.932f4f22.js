(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{463:function(s,n,t){"use strict";t.r(n);var e=t(1),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"查看文件句柄限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件句柄限制"}},[s._v("#")]),s._v(" 查看文件句柄限制")]),s._v(" "),t("p",[s._v("ulimit -n")]),s._v(" "),t("p",[s._v("ulimit -n 10000 # 临时修改最大限制，当前连接有效")]),s._v(" "),t("p",[t("strong",[s._v("修改单进程限制")])]),s._v(" "),t("p",[t("code",[s._v("/etc/security/limits.conf")])]),s._v(" "),t("div",{staticClass:"language-config line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# hard表示真正限制\nhard nofile 1000000\n\n# soft表示警告的限制\nsoft nofile 1000000\n\n# nofile表示打开的最大文件数。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("修改系统整体限制")])]),s._v(" "),t("p",[s._v("cat /proc/sys/fs/file-max  # 查看系统允许的最大连接数")]),s._v(" "),t("p",[t("code",[s._v("/etc/sysctl.conf")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 文件句柄最大数也即是连接最大数\nfs.file-max = 6000000\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);