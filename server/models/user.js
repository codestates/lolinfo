"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Board);
      User.hasMany(models.Reply);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        comment: "고유번호 UUID",
      },
      email: {
        type: DataTypes.STRING(100),
        validate: {
          isEmail: true,
        },
        comment: "이메일",
      },
      password: {
        type: DataTypes.STRING(100),
        comment: "비밀번호",
      },
      name: {
        type: DataTypes.STRING(100),
        comment: "이름",
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      paranoid: true,
    },
  );
  return User;
};
