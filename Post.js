const Comment = require("./Comment")


class Post {
  constructor(title, content, nameAuthor){
    this.date = new Date().toString()
    this.author = nameAuthor
    this.title = title
    this.content = content
    this.usersComments = []
  }
  addComent(userName, comment){
    const comments = this.usersComments.push(new Comment(userName, comment))
    return comments
  }
}
module.exports = Post
