var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Animal class created
var Animal = (function () {
    //Through the constructor the animal name is passed
    function Animal(N) {
        this.name = N;
    }
    //The method move is used to how the animal move the distance per hour
    Animal.prototype.move = function (distence) {
        console.log(this.name + " moved " + distence);
    };
    //The makeSound method used to what sound the animal make
    Animal.prototype.makeSound = function (sound) {
        return console.log(this.name + " make the sound " + sound);
    };
    return Animal;
}());
//Tiger class extend(inherit) the property of Animal class
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        //super is a keyword and used to connect Tiger class to Animal class
        return _super.call(this, name) || this;
    }
    return Tiger;
}(Animal));
//Horse class extend(inherit) the property of Animal class
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        //super is a keyword and used to connect Horse class to Animal class
        return _super.call(this, name) || this;
    }
    return Horse;
}(Animal));
var tiger = new Tiger("Indian Tiger");
var horse = new Horse("The plamino");
tiger.move(80);
tiger.makeSound("Roar");
horse.move(45);
horse.makeSound("Neigh");
