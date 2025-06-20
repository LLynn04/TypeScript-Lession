"use strict";
class UserInform {
    constructor(id, name) { }
}
class CardUser extends UserInform {
    constructor(id, name, age, gender, salary, role) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
        this.role = role;
    }
    setSalary(cutSalary) {
        const newSalary = this.salary - cutSalary;
        this.salary = newSalary;
    }
}
const userResult = new CardUser(1, "Seth", 20, "male", 5000, "Backe-end");
userResult.setSalary(3000);
console.log(userResult);
const arr = [1, 2, 3, 4, 5];
const i = 0;
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
