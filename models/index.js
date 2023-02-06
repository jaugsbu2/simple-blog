const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
  foreignKey: 'creator_id',
});

User.hasMany(Post, {
  foreignKey: 'creator_id',
  onDelete: 'CASCADE',
  hooks: true,
});

module.exports = { Post, User };
