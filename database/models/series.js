module.exports = (sequelize, dataTypes) => {
    let alias = 'Series';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        
        title:{
            type: dataTypes.STRING
        },
        
        release_date: {
            type: dataTypes.DATE
        },
        
        end_date: {
            type: dataTypes.DATE
        },
        
        genre_id: {
            type: dataTypes.INTEGER
        },

    };
    
    let config = {
        tableName: 'series',
        timestamps: false,
    };
    const Series = sequelize.define(alias, cols, config);

    return Series;
}