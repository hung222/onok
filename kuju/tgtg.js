
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Khai báo một Schema
var ghhSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
ghhSchema.methods.showMessages = function() {
  console.log(`Đã thêm bài viết mới có tên "${this.title}"`)
}
//Thực hiện chuyển đổi từ Schema sang Model
varghh = mongoose.model('ghh', ghhSchema);