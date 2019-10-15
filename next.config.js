const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
    [
        withCSS
    ], 
    {
        webpack: config => {
            config.module.rules.push({
                test: /\.md$/i,
                loader: ['raw-loader'],
            });
    
            // config.context = path.resolve(__dirname, './posts');
    
            return config;
        }
    }
)