/*
1.对象就是某个特定的引用类型的实例
2.今天我学object类型，我们通常把对象就直接称为object，那么今天就在object上理解对象
的基本概念

*/
var obj = new Object();
obj.name = "xiaoming";
obj.age = 12;

var obj2 = {
	name:"xiaoming",
	age:12
}
alert(obj == obj2);//ture

/*
3.对象的创建，有两种方式：a:构造函数法，就是上面的obj的创建，运用new加上构造函数
							然后向对象里面加一个有一个属性，这样很慢
						  b:字面量创建，就是obj2的方法来创建，这样快，但是有一个缺点，
						  字啊后面会知道，字面量方法给对象大量添加属性，会给原对象的一些
						  属性覆盖掉
*/

/*
4.获取对象中属性的方法：a:直接对象名加上点后面跟着属性名
						b:对象名后面加上中括号，中括号里面是属性名
						
*/