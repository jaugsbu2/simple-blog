const sequelize = require('../config/connection');
const seedposts = require('./postData');
const seedusers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedusers();

  await seedposts();
  
  process.exit(0);
};

seedAll();
