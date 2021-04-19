const { Model, DataTypes } = require("sequelize");

class USER extends Model {}

exports.modelUser = (sequelize) => {
    USER.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            userName: DataTypes.STRING,
            age: DataTypes.INTEGER,
            mail: DataTypes.STRING,
            hash: DataTypes.STRING
        }, 
        { sequelize }
    );

    return USER;
}