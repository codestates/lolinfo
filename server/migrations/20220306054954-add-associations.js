"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Boards", "userId", {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      comment: "게시글 작성자의 uid참조",
    });

    await queryInterface.addColumn("Replies", "userId", {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      comment: "댓글작성자의 uid참조",
    });

    await queryInterface.addColumn("Replies", "boardId", {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: "Boards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      comment: "댓글이 달린 게시글의 참조",
    });

    await queryInterface.addColumn("Replies", "groupdId", {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: "Replies",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      comment: "대댓글일시 원본(부모)댓글의 uid 참조",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "Boards", // name of Source model
      "userId", // key we want to remove
    );

    await queryInterface.removeColumn(
      "Replies", // name of Source model
      "userId", // key we want to remove
    );

    await queryInterface.removeColumn(
      "Replies", // name of Source model
      "boardId", // key we want to remove
    );

    await queryInterface.removeColumn(
      "Replies", // name of Source model
      "groupdId", // key we want to remove
    );
  },
};
