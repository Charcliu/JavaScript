function Foo() {
    getName = function () { 
        console.log('1');
    };
    return this;
}
Foo.getName = function () {
    console.log('2');
};
Foo.prototype.getName = function () { 
    console.log('3');
};
var getName = function () { 
    console.log('4');
};
function getName() { 
    console.log(5);
}

Foo.getName();  
getName();    
Foo().getName(); 
getName();  
new Foo.getName(); 
new Foo().getName();   
new new Foo().getName(); 

2 4 1 1 2 3 3

var length = 10;
function fn() {
    console.log(this.length)
};
var obj = {
    length: 5, 
    method: function (fn) {
        fn();
        arguments[0]();
        fn.call(obj, 12);
    }
};
obj.method(fn, 1);
10 2 5