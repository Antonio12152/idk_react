import '../CSS/PostImg.css'
import Pagin from './Pagin';
const PostsimgList = ({ posts, curentPost, loading, postsPerPage, paginate }) => {
    if (loading) {
        return <h2>loading</h2>
    }
    return (<div className='div-main'>
        {curentPost.map((post) => (
            <div key={post.id} className='div-post-img'>
                <div>
                    <div className='div-title'>{post.title}</div>
                </div>
                <div className='div-img'>
                    <img src={post.url} alt="img" />
                </div>
            </div>
        ))}
        <Pagin postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate} />
    </div>)
}

export default PostsimgList;