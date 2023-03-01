module.exports = (sequelize, dataTypes) => {
    let alias = 'Migrations';
    let cols = {

        id: {

            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,

        },

        migration: {
            type: dataTypes.STRING
        },

        batch: {
            type: dataTypes.INTERGER
        },

    };

    let config = {
        tableName: 'migrations',
        timestamps: false,
    };

    const Migrations = sequelize.define(alias, cols, config);

    return Migrations;
}