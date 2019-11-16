class Person {
    constructor(name = '?', age = '?', gender = '?', department = '?') {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._department = department;
    }
    set name(name) {
        this._name = name;
        console.log('Name is edited!');
    }
    get name() {
        console.log('Name is got!');
        return this._name;
    }
}
let p01 = new Person();
console.log(p01.name);
p01.name = 'Japer';
console.log(p01.name);
console.log(p01._name);