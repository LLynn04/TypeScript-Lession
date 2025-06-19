//array <---> object
const users:{id: number; name: string; isSingle: boolean} = {
    id: 1,
    name: "Kouk Lin",
    isSingle: true,
}

console.log(`${users.id} ${users.name} ${users.isSingle}`)

const item: string[] = ["pen", "toy", "dealdo"];

item.push("money")

item.forEach(element => {
    console.log(element)
});
