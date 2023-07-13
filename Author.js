// crie uma class author 
// Os objetos da class post tem que ter um objeto da class author que é o autor do post
// Os objetos de author tem que ter um array de post 
// metodo para a criação de post 

const Post = require("./Post")

class Author {
  constructor(nameAuthor){
    this.nameAuthor = nameAuthor
    this.posts = []
  }
  addPost(title, content){
    const post = new Post(title, content, this)
    this.posts.push(post)
    return post
    //  Não recomendo utilizar o codigo a baixo pois ele não funciouno
    //  const postCreat =  this.posts.push(new Post(title, content, this))
    //  return postCreat
    }
}
module.exports = Author
