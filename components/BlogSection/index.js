import Title from '../Title'
import Separator from '../Separator'
import PostCard from '../PostCard'

const BlogSection = (props) => (
    <>
        <Title title="Blog"/>
        <Separator />
        {props.posts.map((item, key) => {
            return <PostCard {...item} key={key} />
        })}
    </>
)

export default BlogSection;