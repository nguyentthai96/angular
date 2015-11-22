var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});
PostSchema.set('toJSON', { getters: true });
mongoose.model('Post', PostSchema);