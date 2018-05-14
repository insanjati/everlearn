'use strict';
module.exports = (sequelize, DataTypes) => {
  var purchases = sequelize.define('purchases', {
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
        model: 'course',
        key: 'id'
      }
    }
  }, {});
  purchases.associate = function(models) {
    // associations can be defined here
    purchases.belongsTo(models.students, {
      foreignKey: 'studentId',
      onDelete: 'CASCADE'
    });
    purchases.belongsTo(models.courses, {
      foreignKey: 'courseId',
      onDelete: 'CASCADE'
    });
  };
  return purchases;
};