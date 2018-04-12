function father(name, age){
	this.name = name;
	this.age = age;
}

fnP = father.prototype;

fnP.print = function(){
	console.log(this.name + " " + this.age)
}

function son(name, age, school){
	this.school = school;
	father.call(this, name, age);
}

function empty(){}
empty.prototype = fnP;
son.prototype = new empty();

son.prototype.constructor = son;

fnS = son.prototype;

fnS.show = function(){
	console.log("son is owner!");
}