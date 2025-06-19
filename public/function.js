"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main(name) {
    console.log(`hi nice to meet you ${name}`);
}
main("Linn");
function cacl(ans1, ans2) {
    console.log(ans1 + ans2);
}
cacl(3, 3);
const gender = "male";
const userName = "Bopha";
let num1 = 20;
let num2 = 2;
const inform = () => {
    if (num1 < num2) {
        console.log("get out u monkey");
    }
    else {
        console.log(`hi ${userName}, your gender is: ${gender} and your age: ${num1 + num2}`);
    }
};
inform();
const addName = ["chanda", "kasi", "lamyoung"];
const addNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalName = (addName) => addName.reduce((p, a) => p + a);
console.log(totalName(addName));
const calculate = (addNum) => addNum.reduce((c, d) => c + d);
console.log(calculate(addNum));
