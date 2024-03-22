import '../CSS/Post.css'

const PostList = ({ posts }) => {
    return (<div className='div-main'>
        {posts.map((post)=>(
            <div key={post.id} className='div-post'>
                <div className='div-title'>{post.title}</div>
                <div className='div-body'>{post.body}</div>
            </div> 
        ))}
    </div>)
}

export default PostList;