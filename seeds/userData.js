const { User } = require('../models');

const userdata = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
