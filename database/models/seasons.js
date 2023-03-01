module.exports = (sequelize, dataTypes) => {
    let alias = 'Seasons';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        
        title:{
            type: dataTypes.STRING
        },
        
        number: {
            type: dataTypes.INTEGER
        },
        
        release_date: {
            type: dataTypes.DATE
        },
        
        end_date: {
            type: dataTypes.DATE
        },
        serie_id: {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tableName: 'seasons',
        timestamps: false,
    };
    const Seasons = sequelize.define(alias, cols, config);

    return Seasons;
}