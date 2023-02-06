const { Post } = require('../models');

const postdata = [
  {
    title: "Post 1",
    content: "hellocontent",
    creator_id: 1
  },
  {
    title: "Post 2",
    content: "hellocontent",
    creator_id: 1
  },
  {
    title: "Post 3",
    content: "hellocontent",
    creator_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
