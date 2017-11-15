/*
1.document是HTMLDcumentde 一个实例，表示整个HTML页面，而且document对象是widow的
一个属相，所以可以将其作为全局对象来访问

2.文档子节点：Dcoument节点，可以是DocumentType.Element.processingInStruction或comment类型节点
3.document对象属性
	a:documentElement属性：这个属性永远指向<html>元素，所以document.documentElement
	指向HEML中的<html>标签
	b:body属性：顾名思义，body属性指向HTML中的<body>标签，所以docment.body指向<body>
	注：document.documentElement和document.body适合所有浏览器
	c:document.doctyp:doctype属性指向<DOCTYPE>

4.对<html>外部注释的处理，从技术上讲，<html>外部的注释也是Document节点的子节点，
但是各个浏览器处理方式却不同

5.文档信息：
document对象还有一些标准的Document对象，所没有的属性
a:document.title:指向<title>
b:URL：document.URL获取当前页面的URL就是全部链接
c:domain.document.domain:获取域名的属性，例如www.baidu.con部分，这个属性可以
改变域名，但有些规则
 	不能改为URL中不包含的域
 	如果域名开始是松散的，就不能再改为紧绷的
 d:referrer:documentt.referrer获取连接到当前面的页面URL，如果没有源头页面，那么为null

6.document对象中的方法
	a:document.getElementById();接受一个参数，要获取元素的ID
	注：1.id一定要严格区分大小写
		2.在包含name的标签中，name值与id值不能相同
	b:document.getElementsByTagName():这个方法接受一个参数既要获取元素标签名

	注：这个方法会返回一个参数组的HEMLcollection对象
	获取子元素，这个对象中有个方法叫做namedItem()方法将带有name的标签中的name做为参数，
	即能获取这个标签元素
	c:document.getElementsByName()：这个方法获取带有name的标签元素
	


*/