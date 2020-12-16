/*        ----- readonly      ------------------ const

- Use for    Class property                   class field, variables

- init        in the declaration                in the declaration
              Or inside the constructor   
*/

class Person {
    public readonly birthDate: Date;
    private IPADDRESS: string = '10.0.0.1';

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person(new Date(1999, 12, 25));

//person.birthDate = new Date(1991, 12, 25);

class Person2 {
    isActive: boolean = true;

    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}


let employee: object;

employee = {
    firstName: 'Jhon',
    lastName: 'Doe',
    age: 28 
};

let skill: [string, number];
skill = ['programming', 5];

let bgColor, headerColor: [number, number, number, number?];

bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];


enum Moth {
    Jan,
    Feb,
    Mar,
    Apr
}