"use strict";
const users = {
    id: 1,
    name: "Kouk Lin",
    isSingle: true,
};
console.log(`${users.id} ${users.name} ${users.isSingle}`);
const item = ["pen", "toy", "dealdo"];
item.push("money");
item.forEach(element => {
    console.log(element);
});
