/*
1.语法：Json可以表示是那种类型的值
a:简单值：就是只有一个值，Json字符串必须使用双引号
b:对象，Json表示对象和对象的字面量形式很像，但又不一样
	注：1.在JSON中，JSON是不需要var来定义变量，JSON中不能有变量
		2.JSON一键值对存储对象，且JSON中键必须要用双引号，而对象不一定
		3，JSON末尾没有分号，但是对象有
c:数组和JavaScript中的数组字面量形式一样

2.JSON的解析与序列化
a:早起解析器使用JavaScript中的eval()函数来解析Json，返回JavaScript对象和数组，
将数据转成JSON
b:ECMAscript对解析JSON进行了规范，定义了一个去哪聚对象，JSON里面有两个方法
	1.stringfy()：将JavaScript对象转化成JSON序列化，有三个参数：
		参数一：对象的名字
		参数二：一个数组或函数，有值就是被序列化的属性和方法，这个功能就叫过滤器
		参数三：这个参数如果是数值那么就为几就是首行缩进多少，若为字符串，那么就是缩进处为这些
		字符串最多只能为10
	2.prase():将JSON字符串解析为原生JavaScript值
	3.toJSON()方法与stringfy()相似，在对象内返回

*/