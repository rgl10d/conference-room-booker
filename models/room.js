module.exports = function (sequelize, DataTypes) {
    const Room = sequelize.define("Room", {
        name: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
    });
    return Room;
};