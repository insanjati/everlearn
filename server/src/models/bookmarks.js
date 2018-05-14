'use strict';
module.exports = (sequelize, DataTypes) => {
  var bookmarks = sequelize.define('bookmarks', {
    studentId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'students',
        key: 'id'
      }
    },
    courseId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'courses',
        key: 'id'
      }
    }
  }, {});
  bookmarks.associate = function(models) {
    // associations can be defined here
    bookmarks.belongsTo(models.students, {
      foreignKey: 'studentId',
      onDelete: 'CASCADE'
    });
    bookmarks.belongsTo(models.courses, {
      foreignKey: 'courseId',
      onDelete: 'CASCADE'
    });
  };
  return bookmarks;
};