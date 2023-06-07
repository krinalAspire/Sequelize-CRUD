const { sq } = require("./db");

const { DataTypes } = require("sequelize");

const User = sq.define("customer", {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  
    employed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });

  User.sync().then(() => {
    console.log("User Model synced");
  });

  module.exports = User;
