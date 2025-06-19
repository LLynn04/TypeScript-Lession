// using interface for store tuples
// read only and optional interface

interface Post {
  readonly id: number;
  age: number;
  userName: string;
  gender: string;
  isSingle?: boolean;
}

const card: Post = {
  id: 1,
  age: 12,
  userName: "bronym",
  gender: "male",
};

card.userName = "jeyel";
// card.id = 2; read only cannot assign


console.log(card)