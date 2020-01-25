module.exports = (sequelize, DataTypes)=>{
    const Profile = sequelize.define('Profile', {
        name: {
            type: DataTypes.STRING,
            required: true
        },
        body: {
            type: DataTypes.STRING,
            required: true
        },
    });

    Profile.associate = model => {
        Profile.belongsTo(model.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Profile;
}
