// Animal class created
class Animal
{
    name:string
    //Through the constructor the animal name is passed
    constructor(N:string)
    {
        this.name=N
    }
    //The method move is used to how the animal move the distance per hour
    move(distence:number):any
    {
        console.log(`${this.name} moved ${distence}`)
    }
    //The makeSound method used to what sound the animal make
    makeSound(sound:string):any
    {
        return console.log(`${this.name} make the sound ${sound}`)
    }
}
//Tiger class extend(inherit) the property of Animal class
class Tiger extends Animal
{
    constructor(name:string)
    {
        //super is a keyword and used to connect Tiger class to Animal class
        super(name)
    }   
}
//Horse class extend(inherit) the property of Animal class
class Horse extends Animal
{
    constructor(name:string)
    {
         //super is a keyword and used to connect Horse class to Animal class
        super(name)
    }
   
}
let tiger=new Tiger("Indian Tiger")
let horse:Animal=new Horse("The plamino")
tiger.move(80)
tiger.makeSound("Roar")
horse.move(45)
horse.makeSound("Neigh")
