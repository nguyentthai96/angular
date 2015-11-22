var Post = require('mongoose').model('Post');
  Post.find().populate('author').exec(function(err, posts) {
});