let profile = {
    firstname: 'Jason',
    lastname: 'Alex',
    gender: 'male',
    age: 28,
    position: 'Product Manager',
    fullname01() {
        return this.firstname + ' ' + this.lastname;
    },
    get fullname02() {
        return this.firstname + ' ' + this.lastname;
    }
};
let result = Reflect.ownKeys(profile);
console.log(result);