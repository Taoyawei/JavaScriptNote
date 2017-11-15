/*
1.Element类型用于表现XML或HTML元素，提供了对元素标签名，子节点一节特性的访问

2.访问元素标签名有两个属性
	a:nodeName属性：
	b:tagName属性：

	注：由tagName属性，返回的标签是大写，所以我们通常装换成小写再比较
3元素：所有HTML元素都是由HTMLElement类型，表示
	a:HTML元素的五大标准特性：
		id:元素在文档中的唯一标识符
		title:有关元素的附加说明信息，一般通过工具提示条显示出来
		lang:元素内容语言代码
		classname：元素的class特性对应

4.设置与删除特性：
a:设置特性两种方法：（1）直接法：直接得到元素加上特性名设置其值
b:运用setAttribute()方法来设置特性
c:删除特性：运用removeAttribute()方法来移除特性

5.attribute属性：它是Element的属性
这个属性里面有一个集合觉NameNodeMap里面有操作特性的方法，见书266页
*/