function Animal(name){
    this.name = name;
}

fnA = Animal.prototype;

fnA.show = function(){
    console.log(this)
}

function Cat(name, voice){
    Animal.call(this, name);
    this.voice = voice;
}

Cat.prototype = Object.create(fnA);
Cat.prototype.constructor = Cat;

fnC = Cat.prototype;

fnC.showCat = function(){
    console.log(this)
}