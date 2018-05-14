'use strict';
module.exports = (sequelize, DataTypes) => {
  var students = sequelize.define('students', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.INTEGER
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY
    },
    location: {
      type: DataTypes.STRING
    }
  }, {});
  students.associate = function(models) {
    // associations can be defined here
    students.hasMany(models.bookmarks, {
      foreignKey: 'studentId',
      onDelete: 'CASCADE'
    });
    students.hasMany(models.purchases, {
      foreignKey: 'studentId',
      onDelete: 'CASCADE'
    });
  };
  return students;
};