一、定义函数的三种方法

1、函数声明

    function 函数名称（参数：可选）{/**函数体**/}

2、函数表达式（2种）也叫函数字面量

     var f = function(){}       //没有函数表示标识符

     var f = function fun(){}  //有函数表示符fun ,即命名函数表达式

3、构造函数法

     var sum = new Function('a','b','return a+b;');  //参数必须加引号


var f = function fun(){}
1、可以用f()调用该命名函数表达式，fun只是一个标识符,不能调用函数。
2、标识符fun只有在函数作用域中有效，在外面的作用域中无效。
	    var foo = function f(n){
		    if(n==1||n==2){
		       	return 1;
		    }else{
		    	//只能在函数内部使用
		    	return f(n-1)+f(n-2)
		    }  
	    }
   	 	console.log(foo(10));　　