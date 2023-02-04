const { User } = require('../models');

const userdata = [
  {
    username: 'joshA',
    email: 'josh@example.com',
    password: 'password',
  },
];

const seedusers = () => Post.bulkCreate(userdata);

module.exports = seedusers;
