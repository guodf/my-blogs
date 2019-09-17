(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{295:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"使用-net-core实现fnv分布式hash一致性算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-net-core实现fnv分布式hash一致性算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用.Net Core实现FNV分布式hash一致性算法")]),t._v(" "),a("p",[t._v("说到"),a("router-link",{attrs:{to:"/_posts/posts/FNVHash.html"}},[t._v("FNV哈希算法")]),t._v("不得不提Memcached，我们先简单介绍一下Memcached。")],1),t._v(" "),a("h3",{attrs:{id:"memcached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memcached","aria-hidden":"true"}},[t._v("#")]),t._v(" Memcached")]),t._v(" "),a("p",[a("code",[t._v("Memcached")]),t._v("分为客户端与服务端，"),a("code",[t._v("Memcached")]),t._v("是服务端，服务端本身不提供分布式实现，只是一个单独的k-v缓存；Memcached的分布式是在客户端类库中实现的，也就是说你可以根据自己的需要实现不同的分布式方案，不一定非得使用"),a("router-link",{attrs:{to:"/_posts/posts/FNVHash.html"}},[t._v("FNV哈希算法")]),t._v("。")],1),t._v(" "),a("p",[t._v("Memcached通过FNV算法实现了服务的分布式，并通过引入虚拟节点的办法尽量是服务器分布的更均匀。已经有很多文章在介绍Memcached的分布式实现原理了，所以我就不那么多废话了。")]),t._v(" "),a("h3",{attrs:{id:"fnv分布式hash算法实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fnv分布式hash算法实现","aria-hidden":"true"}},[t._v("#")]),t._v(" FNV分布式hash算法实现")]),t._v(" "),a("p",[t._v("如果你还不了解"),a("router-link",{attrs:{to:"/_posts/posts/FNVHash.html"}},[t._v("FNV哈希算法")]),t._v("，可以先看一下我之前的文章。")],1),t._v(" "),a("h4",{attrs:{id:"fnv1算法实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fnv1算法实现","aria-hidden":"true"}},[t._v("#")]),t._v(" FNV1算法实现")]),t._v(" "),a("p",[t._v("代码实现上我将参考MD5算法的实现来编写FNV1算法：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先，我将创建一个FNV1类，该类需要实现HashAlgorithm，之所以实现HashAlgorithm，是因为该抽象类定义了hash算法通用的接口，这样也可以使我们的实现与.net框架集成的更好，当然如果你不喜欢也可以不实现HashAlgorithm，就当是写了一个独立的帮助类。")])]),t._v(" "),a("li",[a("p",[t._v("然后，我们重写Create方法，这里我们将创建一个FNV1类的实例")])]),t._v(" "),a("li",[a("p",[t._v("最后，我们去实现这个FNV1类")]),t._v(" "),a("p",[a("code",[t._v("所有实现代码如下：")])])])]),t._v(" "),a("div",{staticClass:"language-C# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//首先我将创建FNV1类 \npublic abstract class FNV1 : HashAlgorithm\n{\n    //重写隐藏HashAlgorithm的Create方法\n    public static new FNV1 Create()\n    {\n    \treturn new Implementation();\n    }\n\t//下面FNV1的实现我们完全是套用的公式没有什么好讲的\n    private sealed class Implementation : FNV1\n    {\n        private const uint OFFSETBASIS = 2166136261;\n        private const uint PRIME = 16777619;\n        private uint _hash;\n        public override void Initialize()\n        {\n        \t_hash = OFFSETBASIS;\n    \t}\n        protected override void HashCore(byte[] array, int ibStart, int cbSize)\n        {\n            int end = ibStart + cbSize;\n            for (var index = ibStart; index < end; index++)\n            {\n            _hash *= PRIME;\n            _hash ^= array[index];\n            }\n        }\n        protected override byte[] HashFinal()\n        {\n            return BitConverter.GetBytes(_hash);\n        }\n\t}\n}\n\n\n### 使用方法\n\nvar bytes=Encoding.UTF8.GetBytes("Test");\nvar hashBytes=FNV1.Create().ComputerHash(bytes);\nvar hashValue=BitConverter.ToUInt32(hashBytes);\n')])])]),a("p",[t._v("FNV其实还有FNV1a算法，与FNV1有些许的区别，这里我就不一一实现了，你可以参考FNV1的实现和"),a("router-link",{attrs:{to:"/_posts/posts/FNVHash.html"}},[t._v("FNV哈希算法")]),t._v("来实现FNV1a算法。我有一个帮助类"),a("a",{attrs:{href:"https://github.com/guodf/microfx/tree/master/src/Cryptography",target:"_blank",rel:"noopener noreferrer"}},[t._v("MicroFx.Cryptography"),a("OutboundLink")],1),t._v("分别实现了FNV1和FNV1a的32bit、64bit算法版本。")],1),t._v(" "),a("h3",{attrs:{id:"为什么使用fnv算法实现hash一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用fnv算法实现hash一致性","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么使用FNV算法实现hash一致性")]),t._v(" "),a("p",[t._v("无论是分布式算法还是hash一致性算法都不只有一种或几种实现方案，但Memached为什么会选择FNV算法，而不是md5，不是sha呢？我有自己的认识。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("我们先看几行代码，分别使用MD5，sha，FNV算法计算一个"),a("code",[t._v("Test")]),t._v("字符串的哈希值，然后对比hash结果中数组的长度")]),t._v(" "),a("div",{staticClass:"language-c# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('var bytes = Encoding.UTF8.GetBytes("Test");\nvar shabytes = SHA1.Create().ComputeHash(bytes); //shabytes长度为20，及160bit\nvar md5bytes=MD5.Create().ComputeHash(bytes);\t//md5bytes长度为16，及128bit\nvar fnvbytes = FNV1a.Create().ComputeHash(bytes); //fnvbytes长度为4，及32bit\n')])])]),a("table",[a("tr",[a("th",[t._v("算法")]),a("th",[t._v("取值范围")])]),t._v(" "),a("tr",[a("td",[t._v("sha1")]),a("td",[t._v("[0,2^160-1]")])]),t._v(" "),a("tr",[a("td",[t._v("md5")]),a("td",[t._v("[0,2^128-1]")])]),t._v(" "),a("tr",[a("td",[t._v("fnv")]),a("td",[t._v("[0,2^32-1]")])])]),t._v(" "),a("p",[t._v("从上表我们可以看出，FNV的取值范围最小，如果将区间内的每一个整数看做一个Memcached服务端节点，那么FNV容纳的数量最少，但相对于实际的环境下已经足够多了，这样我们每次在计算一台服务器属于哪个节点的时候速度上会比md5、sha1快很多。")])]),t._v(" "),a("li",[a("p",[t._v("FNV的32bit计算结果值刚好是一个uint类型，.net core最大支持ulong也就是uint64，再大的话就需要我们自己实现，所以这也是选择FNV的一个原因。"),a("em",[t._v("（或许我这里不应该拿.net举例，但实际常用的高级语言最大也是64bit）")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);