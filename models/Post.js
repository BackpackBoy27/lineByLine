module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            required: true
        },
        body: {
            type: DataTypes.STRING,
            required: true
        },
    });

    Post.associate = model => {
        Post.belongsTo(model.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Post;
}
