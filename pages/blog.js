import Layout from '../components/Layout'
import BlogSection from '../components/BlogSection'
import { withNoBody, withReadingTime } from '../utils/post-utils';
import frontMatter from '../utils/front-matter';
import importAll from '../utils/import-all';

const Blog = (props) => (
    <Layout>
        <BlogSection posts={props.posts}/>
    </Layout>
)

Blog.getInitialProps = async function() {
    const posts = importAll(require.context('../posts/', true, /\.md$/))
        .reverse()
        .map(frontMatter)
        .map(withNoBody)
        .map(withReadingTime)

    return { posts };
}

export default Blog;