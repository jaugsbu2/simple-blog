const { Post } = require('../models');

const postdata = [
  {
    id: 1,
    title: 'Javascript',
    content: 'Javascript is cool.',
    creator_id: 1,
    date: 'April 20, 2021 07:00:00',
  },
];

const seedposts = () => Post.bulkCreate(postdata);

module.exports = seedposts;
