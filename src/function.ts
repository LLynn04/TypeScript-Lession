function main (name: string): void {
    console.log(`hi nice to meet you ${name}`);
}
main("Linn")

function cacl (ans1: number, ans2:number): void {
    console.log(ans1 + ans2)
}
cacl(3, 3);

const gender: string = "male";
const userName: string = "Bopha";
let num1: number = 20;
let num2: number = 2;

const inform = () => {
    if ( num1 < num2) {
       console.log("get out u monkey") 
    } else {
        console.log(`hi ${userName}, your gender is: ${gender} and your age: ${num1 + num2}`)
    }
}
inform()


const addName: string[] = ["chanda", "kasi", "lamyoung"];
const addNum: number[] = [1,2,3,4,5,6,7,8,9,10]

const totalName = (addName: string[]) => addName.reduce((p, a) => p + a );
console.log(totalName(addName));

// const calculate = (addNum: number[]) => {
//     const totalNum = addNum.reduce((c, d) => {
//         return c + d;
//     })
//     return totalNum;
// }
// console.log(calculate(addNum))

const calculate = (addNum: number[]) => addNum.reduce((c, d) => c + d);
console.log(calculate(addNum))

    



export{}