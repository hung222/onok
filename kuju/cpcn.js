var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var ghln = mongoose.model('ghln', schema);
var Tank = mongoose.model('ghln', yourSchema);
 
var small = new ghln({ size: 'small' });
small.save(function (err) {
  if (err) return handleError(err);
  // Đã lưu
});
 
// Hoặc
 
ghln.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  // Đã lưu
});
 
// Hoặc bạn có thể insert vào
ghln.insertMany([{ size: 'small' }], function(err) {
 
});
const doc = ghh MyModel.findOne();
 
doc instanceof MyModel; // true
doc instanceof mongoose.Model; // true
doc instanceof mongoose.Document; // true