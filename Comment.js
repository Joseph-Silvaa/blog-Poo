class Comment {
  constructor(userName, comment){
    this.userName = userName
    this.comment = comment
    this.date = new Date().toString()
  }
}
module.exports = Comment