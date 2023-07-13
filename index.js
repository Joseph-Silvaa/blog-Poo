const Author = require("./Author")

const henrique = new Author("Henrique")
const henriquePots = henrique.addPost("Henrique", "loremmmmm")

henriquePots.addComent("José", "kakakaka")
henriquePots.addComent("Heloisa", "kakakakaka")
henriquePots.addComent("Fulano", "akakakakaka")
console.log(henriquePots)

const henriquePostTwo = henrique.addPost("Taylor Swift", "Falaremso sobre a musica you need come down")
henriquePostTwo.addComent("Fulano", "loremmmm")
henriquePostTwo.addComent("Beltrano", "loremmmm")
henriquePostTwo.addComent("Ciclano", "loremmmm")
console.log(henriquePostTwo)
