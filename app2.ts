class Dog2 {

    private _name: string;
    private _age: number;

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        if(name === 'boby') {
            this._name = 'Hello ' + name;
        } else {
            this._name = name;
        }
    }

    public set age(age: number) {
        if(age <= 8) {
            this._age = 6;
            this._name = 'its a yung dog';
        }
    }
}

let dog = new Dog2();

dog.name = 'boby';

console.log(`dog's name is ${dog.name}`);