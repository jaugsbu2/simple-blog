const sequelize = require('../config/connection');
const seedposts = require('./blogData');
const seedusers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedposts();

  await seedusers();

  process.exit(0);
};

seedAll();
