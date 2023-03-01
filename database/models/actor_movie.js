module.exports = (sequelize, dataTypes) => {

    let alias = 'Actors_movies';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },

        actor_id: {
            type: dataTypes.INTEGER
        },


    };

    let config = {

        tableName: 'actors_movies',
        timestamps: false,
    };

    const Actor_movie = sequelize.define(alias, cols, config);

    return Actor_movie;

}