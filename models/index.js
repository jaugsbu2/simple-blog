const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'creator_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

User.hasMany(Post, {
  foreignKey: 'creator_id',
  onDelete: 'CASCADE',
  hooks: true,
});

User.hasMany(Comment, {
  foreignKey: 'creator_id',
  onDelete: 'CASCADE',
  hooks: true,
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'creator_id'
})


module.exports = { Post, User, Comment };
