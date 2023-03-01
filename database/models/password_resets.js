module.exports = (sequelize, dataTypes) => {
    let alias = 'Password_resets';
    let cols = {
    
        email:{
            type: dataTypes.STRING
        },
        token: {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: 'password_resets',
        timestamps: false,
    };
    const Password_resets = sequelize.define(alias, cols, config);

    return Password_resets;
}