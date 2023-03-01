module.exports = (sequelize, dataTypes) => {

    let alias = 'Episodes';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },

        title: {
                type: dataTypes.STRING
        },
        number: {

            type: dataTypes.INTEGER
        },

        release_date: {
            
            type: dataTypes.DATE    
        },

        rating: {

            type: dataTypes.INTEGER
        },

        season_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {

        tableName: 'episodes',
        timestamps: false,
    };

    const Episode = sequelize.define(alias, cols, config);

    return Episode
}