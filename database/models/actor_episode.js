module.exports = (sequelize, dataTypes) => {
    let alias = 'Actors_episodes';
    let cols = {
        id:     {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoincrement: true,

        },

        actor_id:{
            type: dataTypes.INTEGER,
        },

        episode_id: {
            type: dataTypes.INTEGER
        },
    };

    let config = {


        tableName: 'actors_episodes',
        timestamps: false,
    };

    const Actors_episode = sequelize.define(alias, cols, config);

    return Actors_episode;
}