import '../CSS/PostImg.css'
import Pagin from './Pagin';
const PostsimgList = ({ posts, curentPost, loading, postsPerPage, paginate, curentPage }) => {
    if (loading) {
        return <h2>loading</h2>
    }
    
    return (<div className='div-main'>
        <Pagin postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate} curentPage={curentPage} />
        {curentPost.map((post) => (
            <div key={post.id} className='div-post-img'>
                <a href={`/post/${post.id}`}>
                    <div>
                        <div className='div-title'>{post.title}</div>
                    </div>
                    <div className='div-img'>
                        <img src={post.url} alt="img"/>
                    </div>
                </a>
            </div>
        ))}
        <Pagin postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate} curentPage={curentPage} />
    </div>)
}

export default PostsimgList;