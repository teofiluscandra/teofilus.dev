const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const readingTime = require('./utils/reading-time');
const jdown = require('jdown');
const webpack = require("webpack");
require("dotenv").config();

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

            config.node = {
                fs: 'empty'
            }

            const env = Object.keys(process.env).reduce((acc, curr) => {
                acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
                return acc;
            }, {});
    
            // config.context = path.resolve(__dirname, './posts');
            config.plugins.push(new webpack.DefinePlugin(env));
            return config;
        },
        exportPathMap: async function() {
            // pages we know about beforehand
            const paths = {
              '/': { page: '/' },
              '/about': { page: '/about' },
              '/blog': { page: '/blog' }
            }
            // dynamic, data-generated pages
            const content = await jdown('posts') // assumes some markdown files in a `/posts` folder, with frontmatter that offers a slug
            const posts = [] // build up array of objects for the top level list
            Object.entries(content).forEach(([filename, fileContent]) => {
              // the filename becomes the slug
              paths[`/post/${fileContent.slug}`] = { page: '/post/[slug]', query: { 
                  readingTime: readingTime(fileContent.contents),
                  ...fileContent 
                } 
              }
            })
            
            return paths
        }
    }
)