'use strict';
module.exports = (sequelize, DataTypes) => {
  var courses = sequelize.define('courses', {
    mentorId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'mentors',
        key: 'id'
      }
    },
    courseName: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    curriculum: {
      type: DataTypes.TEXT
    }
  }, {});
  courses.associate = function(models) {
    // associations can be defined here
    courses.belongsTo(models.mentors, {
      foreignKey: 'mentorId',
      onDelete: 'CASCADE'
    });
    courses.hasMany(models.bookmarks, {
      foreignKey: 'courseId',
      onDelete: 'CASCADE'
    });
    courses.hasMany(models.purchases, {
      foreignKey: 'courseId',
      onDelete: 'CASCADE'
    });
  };
  return courses;
};