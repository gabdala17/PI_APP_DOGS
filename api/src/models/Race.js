const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('race', {
    id:{
        type: DataTypes.UUID,
        defaultvalue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMax:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    heightMin:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    weightMax:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    life_spanMin:{
        type: DataTypes.STRING,
    },
    life_spanMax:{
        type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });
};