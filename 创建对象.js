创建对象
	组合使用构造函数模式和原型模式(目前使用最广泛、认同度最高的一种创建自定义类型的方法)
	function Person(name, age, job){
		this.name = name;
		this.age = age;
		this.job = job;
		this.friends = ["Shelby", "Court"];
	}

	Person.prototype = {
		constructor : Person,
		sayName : function(){
			alert(this.name)
		}
	}

	Object.create()函数用于创造一个副本(创建的对象的__proto__属性指向传入的对象，自身没有任何属性和方法)。实现原理如下
	function object(o){
		function F(){};
		F.prototype = o;
		return new F();
	}

实现集成
	寄生组合式继承(及优点于一身，是实现类型继承的最有效方式)
	function SuperType(name){
		this.name = name;
	}
	SuperType.prototype.sayName = function(){
		alert(this.name);
	}

	function SubType(name, age){
		SuperType.call(this, name);
		this.age = age;
	}

	function inheritPrototype(SubType, SuperType){
		// 获取父构造函数原型副本
		var prototype = Object.create(SuperType.prototype); // 创建对象 
		prototype.constructor = SubType;  // 增强对象
		SubType.prototype = prototype;   // 指定对象
	}

	inheritPrototype(SubType, SuperType);

	SubType.prototype.sayAge = function(){
		alert(this.age);
	};

	var sub = new SubType("Fluently", 25);	
	sub.sayAge()
	sub.sayName()