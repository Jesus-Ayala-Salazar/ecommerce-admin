module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING
    },
    pw: {
      type: Sequelize.STRING
    }
  });

  return User;
};
