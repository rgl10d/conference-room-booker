// CREATE ROOM MODEL
module.exports = function (sequelize, DataTypes) {
    const Room = sequelize.define("Room", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20],
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        needClean: {
            type: DataTypes.BOOLEAN,
            default: false
        }
        // For future room size implementation
        // ,
        // capacity: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         len: [1, 2],
        //     }
        // }
    });
    // EXPORT MODEL TO CONTROLLER 
    return Room;
};