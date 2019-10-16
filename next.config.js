const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const readingTime = require('./utils/reading-time');
const jdown = require('jdown');

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