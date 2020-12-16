// let variableName: type = value;
//function hello() {
  //  let name: string = 'juan';
    //var name = 'prueba';
//}

//console.log(name);

class Dog {
    private legs: number;
    private name: string;
    private color: string[];

    constructor(legs: number, name: string) {
        this.legs = legs;
        this.name = name;
        this.color = ['Brown', 'White'];
    }

    public woof(): string {
        return `The dog name is ${this.name} - and its legs is ${this.legs}`;
    }
}

let dog = new Dog(4, 'Rocky');
let woof = dog.woof();
console.log(woof);