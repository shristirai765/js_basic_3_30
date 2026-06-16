
//! class
//dry 
//reuse
// defines the properties 
//initializes the obj too

//constructor use to initialize obj , called when obj is created

//this- current instances point
class User{
    name;
    email;
    #password; //private->#

    constructor (name, email, password){
        this.name = name;
        this. email = email;
        this.password = password;
    }

    //to access private members use methods
    getPassword(){
        return this.password;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    //!polymorphism
    introduce(){
        console.log("This is User class")
    }
}
let John = new User('John', 'john@gmail.com', '1234');
// console.log(John);
// console.log(John["email"])
// console.log(ram.getPassword())

//access modifier - public, private

//Student
//!Inheritance
class Student extends User{
    faculty;
    roll_no;
    batch;
    //super() ->parent class ko constructor 
    constructor(name, email, password, faculty, roll_no, batch){
        super(name, email, password);
        this.faculty = faculty;
        this.roll_no = roll_no;
        this.batch = batch;
    }
    getBatch(){
        return this.batch;
    }
    //overriding
    introduce(){
        console.log("This is Student class")
    }

}

let ram = new Student('Ram', 'ram1@gmail.com', '2345', "BIT", 23, 2023);

// console.log(ram)
// console.log(ram.getPassword())
// John.introduce()
// ram.introduce()

//!Abstraction- hides implementation

class MakeCoffee{
    start(){
        console.log("Start");
        this.#grinding();
        this.#heating();
        this.#processing();
        this.#dispatch();

    }
    #grinding(){
        console.log("grinding");
    }
    #heating(){
        console.log("Heating water");
    }
    #processing(){
        console.log("processing");
    }
    #dispatch(){
        console.log("Coffee is ready");
    }
}
const cm = new MakeCoffee();
// cm.start();
//prevents user from seeing the implementation by using private access modifier

//todo: static method, getter, setter 
//static method belongs to the class 
//no need to instantiate like an object

//that allow you to define how an object property is accessed or modified while making them look like regular properties to external code
//getter-special method
//accessed like a properties rathen than a function

//setter-special method
//must accept only one value

class Circle{
    radius;
    constructor(r){
        this.radius = r;
    }
    set rad(r){
        this.radius = r;
    }
    get area(){
        return (Math.PI * this.radius * this.radius).toFixed(3);
    }
}
const c1 = new Circle(10);
console.log(c1.area);
c1.rad = 12
console.log(c1.area)