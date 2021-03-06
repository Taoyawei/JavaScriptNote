/*
节点：
1.共有12中节点
Node类型：1.所有类型的节点都继承自Node节点，所以所有类型的节点都共享着基本的属性和方法
		  2.每个节点都有nodeType属性，来表明节点类型，兼容性写法：someNode.nodeType =1
		  IEmeiyou 公开Node类型的构造函数

		  注：虽然所有节点类型都继承自Node类型，所以Node中的属性和方法被共享，但因为
		  哥哥类型都有不同，所以由此而属性和方法被共享不一定能用


		3.节点关系：（属性）
		 a:概念：把每个节点想象成一个空间，里面有一个属性觉childNode,这个属性
		 中保存了一个NodeList对象，childNode就是保存子节点的空间名，而NodeList是一个类数组对象
		 里面保存着各个子节点。
		 b:Node类型节点的属相说白了就是父节点与子节点关系，子节点与其它子节点关系
		 c:parentNode属性：每个节点都有这个属性，指向其父节点
		 previousSibling属性：描述子节点之间的关系，这个属相指调用它的子节点的前一个节点
		 nexSibling:这个属性是指向调用这个节点的下一个节点
		 fristChild:这是指向调用这个属性节点的最后一个子节点
		 length:节点长度，子节点个数

		 4.操作节点（节点方法）：
		 	a:haschildNodes():判断此节点是否有子节点，有就返回true
		 	b:appendChild()：在子节点的末尾加上一个节点，这个方法添加的子节点会让childNodes
		 	列表中的指针关系呗刷新
		 	c:insertBefore():有两个参数，第一个是要插入的节点，第二个参数是作为参照的节点
		 	d:replaceChuld():两个参数，第一个是插入的节点，第二个是被替换的节点，替换后原节点
		 	被替换，不再有它的位置，形同与被移除
		 	e:removeChild():移除方法其实就是让节点失去位置，从而达到移除效果

		 	5.所有类型节点都有的方法：
		 	a:cloneNode()，复制方法，只有一个参数，参数为true为深层复制，而参数为false时不会复制
		 	这个节点的子节点
		 	b:normalize()：这个方法位移的作用就是处理文档树中的文本节点
*/