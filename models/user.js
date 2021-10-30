'use strict';

const { encode } = require('../helpers/bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.WatchList, { foreignKey: 'UserId' })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Username is required' },
        notEmpty: { msg: 'Username cant be empty' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Email is required' },
        notEmpty: { msg: 'Email cant be empty' }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password is required' },
        notEmpty: { msg: 'Password cant be empty' }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = encode(user.password)
      }
    },  
    sequelize,
    modelName: 'User',
  });
  return User;
};