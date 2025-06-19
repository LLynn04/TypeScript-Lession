interface User {
    userName: string;
    age: number;
    isSingle?: boolean;
    // walking (): void;
}

const userOne: User = {
    userName: "meng",
    age: 12,
    isSingle: true,
    // walking: () => console.log("you won")
}

// console.log(userOne)
// console.log(userOne.walking)

// interface as parameter
function getOp (p: User):void {
    console.log(`your work from ${p.userName}`)
}
getOp(userOne);