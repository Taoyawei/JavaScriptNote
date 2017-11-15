/*
选择符API是W3C对各个浏览器自己扩充的Dom进行了整合处理，出现了两个方法：
1.querySelector()方法：该方法接收一个参数，就是要查找的选择符，querySelector()返回查找到的第一个符合的
元素

注：querySelector()方法可以被document和element调用，但是区别是：如果是documetn.querySelsctor()
那么在文档里面找到第一个符合的元素，返回，如果是element.querySelector()那么只会在调
用元素的后代中查找

2.querySelectoryAll()方法：这个方法也只接受一个参数，就是要查的选择符，querySelectorAll()
与querySelector（）不同的地方是，querSelectorAll()返回的事一个NodeList集合，这里面包含了所有符合条件的元素，这些元素
都成了集合对象，每个元素都会带上自己的属性和方法返回

注：能够调用querySelectorAll()方法的节点有document.element.documentFragment
*/