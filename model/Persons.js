'use strict'

module.exports = (sequelize, DataTypes) => {
  
  console.log("inside Persons master model")
   
  const persons = sequelize.define('users', {
    PersonID: {
      type: DataTypes.INTEGER,
      required: true,


    },

    LastName: {
      type: DataTypes.STRING

    },
    FirstName: {
      type: DataTypes.STRING

    },

    Address: {
      type: DataTypes.STRING

    },
    City: {
      type: DataTypes.STRING
    }

  }, {

    timestamps: false
  });
  return persons;
};