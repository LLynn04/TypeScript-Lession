"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InformUser {
    constructor(id, name) {
        this.id = id;
    }
}
class UserCard extends InformUser {
    constructor(id, name, salary, gender, role) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.role = role;
    }
    setSalary(cutSalary) {
        const newSalary = this.salary - cutSalary;
        this.salary = newSalary;
    }
}
const userInform = new UserCard(1, "Seth", 5000, "male", "back");
userInform.setSalary(2500);
console.log(userInform);
