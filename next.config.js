module.exports = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.graphql$/,
            exclude: /node_modules/,
            use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
        });

        config.module.rules.push({
            test: /\.graphqls$/,
            exclude: /node_modules/,
            use: ['graphql-let/schema/loader'],
        });

        config.module.rules.push({
            test: /\.ya?ml$/,
            type: 'json',
            use: 'yaml-loader',
        });

        if (!options.isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config;
    },
};
