import Title from '../Title'
import Separator from '../Separator'
import BlogCard from '../BlogCard'

const BlogSection = (props) => (
    <>
        <Title title="Blog"/>
        <Separator />
        {props.posts.map((item, key) => {
            return <BlogCard {...item} key={key} />
        })}
    </>
)

export default BlogSection;