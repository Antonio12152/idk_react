import '../CSS/PostImg.css'
const PostimgSingle = ({ post, loading }) => {
    if (loading) {
        return <h2>loading</h2>
    }
    return (<div className='div-main'>
        <div key={post.id} className='div-post-img'>
            <div>
                <div className='div-title'>{post.title}</div>
            </div>
            <div className='div-img'>
                <img src={post.url} alt="img" />
            </div>
        </div>
    </div>)
}


export default PostimgSingle;