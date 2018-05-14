'use strict';
module.exports = (sequelize, DataTypes) => {
  var mentors = sequelize.define('mentors', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
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
    about: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING
    },
    npwp: {
      type: DataTypes.INTEGER
    },
    bankName: {
      type: DataTypes.STRING
    },
    bankAccountNumber: {
      type: DataTypes.INTEGER
    }
  }, {});
  mentors.associate = function(models) {
    // associations can be defined here
    mentors.hasMany(models.courses, {
      foreignKey: 'mentorId',
      onDelete: 'CASCADE'
    });
  };
  return mentors;
};