const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')

const nextConfig = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            }
        )
        return cfg;
    }
}

module.exports = withPlugins([
    [withCSS({})]
], nextConfig);

