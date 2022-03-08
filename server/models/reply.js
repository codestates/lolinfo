"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reply.hasMany(models.Reply);
      Reply.belongsTo(models.User);
      Reply.belongsTo(models.Board);
    }
  }
  Reply.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        comment: "고유번호 UUID",
      },
      body: DataTypes.STRING,
      class: DataTypes.TINYINT,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reply",
      timestamps: true,
      paranoid: true,
    },
  );
  return Reply;
};
