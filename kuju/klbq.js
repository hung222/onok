var GHH = mongoose.model('GHH', ghhSchema);
var dataInsert = {
  title:  'Lập trình NodeJS căn bản', 
  author: 'Freetuts.net',
  body:   'Nội dung lập trình NodeJS căn bản',
  hidden: false,
}
var ghhCollections = new ghh(dataInsert);
ghhCollections.save(function (err, data) {
  if (err) return console.error(err);
  console.log(data) 
  ghhCollections.showMessages()
});