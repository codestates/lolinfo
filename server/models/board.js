"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Board.belongsTo(models.User);
      Board.hasMany(models.Reply)
    }
  }
  Board.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        comment: "고유번호 UUID",
      },
      title: DataTypes.STRING,
      hit: {
        type: DataTypes.INTEGER,
        comment: "좋아요 개수",
      },
      body: {
        type: DataTypes.TEXT,
        comment: "글 본문",
      },
      view: {
        type: DataTypes.INTEGER,
        comment: "조회수",
      },
    },
    {
      sequelize,
      modelName: "Board",
      timestamps: true,
      paranoid: true,
    },
  );
  return Board;
};
