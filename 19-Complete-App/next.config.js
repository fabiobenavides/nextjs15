const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'dev-fake-user',
                mongodb_password: 'dev-fake-password',
                mongodb_clustername: 'dev-fake-cluster',
                mongodb_database: 'dev-fake-database',
            }
        };
    }

    return {
        env: {
            mongodb_username: 'prod-fake-user',
            mongodb_password: 'prod-fake-password',
            mongodb_clustername: 'prod-fake-cluster',
            mongodb_database: 'prod-fake-database',
        }
    };
};
