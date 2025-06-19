// // union type
// type Condition = "ITE" | "IT" | "DT";
// class InforUser {
//     constructor( private id: number, public salary:number) {
//     }
// }
// class User extends InforUser {
//   constructor(private name: string, public gender: string, condition: Condition, id: number, salary: number) {
//     super(id, salary)
//   }

//   // define class method
//   feature: string[] = [];
//   addFeature(feature: string): void {
//     this.feature.push(feature);
//   }
// }

// // const userOne = new User("bang","male","IT");
// const userTwo = new User( "Thida", "female", "ITE",1, 5000);
// userTwo.addFeature("Good");

// console.log(userTwo);

// export {};

// access modify

// type Position = "UI" | "Front" | "back";

// class InformUser {
//   id: number;
//   age: number;
//   salary: number;
//   constructor(id: number, age: number, salary: number) {
//     this.id = id;
//     this.age = age;
//     this.salary = salary;
//   }
//    setSalary(cutSalary: number): void {
//         const newSalary = this.salary - cutSalary;
//         this.salary = newSalary;

//     }
// }

// class CardUser extends InformUser {
//   name: string;
//   gender: string;
//   position: Position;

//   constructor(
//     id: number,
//     name: string,
//     age: number,
//     gender: string,
//     salary: number,
//     position: Position
//   ) {
//     super(id, age, salary);
//     this.name = name;
//     this.gender = gender;
//     this.position = position;
//   }
// }

// const myUser = new CardUser(1, "thida", 22, "female", 5000, "back");
// myUser.setSalary(400)
// console.log(myUser);

type Role = "ui" | "back" | "front";

class InformUser {
  constructor(public id: number, name: string) {}
}
class UserCard extends InformUser {
  constructor(
    public id: number,
    public name: string,
    public salary: number,
    public gender: string,
    public role: Role
  ) {
    super(id, name);
  }
  setSalary(cutSalary: number): void {
    const newSalary = this.salary - cutSalary;
    this.salary = newSalary;
  }
}
const userInform = new UserCard(1, "Seth", 5000, "male", "back");
userInform.setSalary(2500)
console.log(userInform);

export {};
