import Error from 'next/error';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter();
    const post = router.query;
    if(post == {}) return <Error statusCode={404} />
    return (
        <Layout>
            <div className="bg-gray-100 font-sans leading-normal tracking-normal">
                <div className="container w-full md:max-w-3xl mx-auto pt-5">
                    <div className="w-full px-4 text-xl text-gray-800 leading-normal">
                        <div className="font-sans">
                            <span className="text-base md:text-sm text-teal-500 font-bold">
                                <span> 
                                    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 text-3xl md:text-4xl">{post.title}</h1>
                                    <p className="text-sm md:text-base font-normal text-gray-800 pb-2">{post.preview}</p>
                                
                                    <p className="text-sm md:text-base font-normal text-gray-600">{post.readingTime} min read</p>
                                    <p className="text-sm md:text-base font-normal text-gray-600">Published
                                    <time>
                                        { '  ' + new Date(post.created_at).toLocaleDateString('en', {
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time></p>
                                </span>
                            </span>
                        </div>

                        <div className="article__content content pt-6" dangerouslySetInnerHTML={{ __html: post.contents }}>
                        
                        </div>
                    </div>

                    <div className="text-base md:text-sm text-gray-500 px-4 py-6">
                        Tags: {
                            Array.isArray(post.keywords) &&
                                post.keywords.map((word, key) => {
                                    return <span className="text-base md:text-sm text-teal-500 no-underline" key={key}>{word} </span>
                                })
                        }
                    </div>
        
                    <hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>

                    <div className="flex w-full items-center font-sans px-4 py-12">
                        <img className="w-10 h-10 rounded-full mr-4" src="/static/profile_400x400.jpg" alt="Avatar of the Author"></img>
                        <div className="flex-1 px-2">
                            <p className="text-base font-bold text-base md:text-xl leading-none mb-2">{post.author}</p>
                            <p className="text-gray-600 text-xs md:text-base">Everyday LOL</p>
                        </div>
                        <div className="justify-end">
                            <Link href={'/about'}><button className="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full">Read More</button></Link>
                        </div>
                    </div>
                </div> 
            </div>
        </Layout>
    )
}

Post.getInitialProps = async function(props) {
    return { post: false };
}

export default Post