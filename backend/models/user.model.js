module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    phone: { type: Sequelize.STRING, allowNull: true, unique: true },
    address: { type: Sequelize.TEXT, allowNull: true },
  });

  return User;
};
