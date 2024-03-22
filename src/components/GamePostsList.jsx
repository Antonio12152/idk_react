import '../CSS/Post.css'
import Pagin from './Pagin';

const GamePostsList = ({ posts, curentPost, loading, postsPerPage, paginate, curentPage }) => {
    if (loading) {
        return <h2>loading</h2>
    }
    return (<div className='div-main'>
        <Pagin postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate} curentPage={curentPage} />
        {curentPost.map((post) => (
            <div key={post.id} className='div-post'>
                <a href={`/gamepost/post/${post.id}`}>
                    <div className='div-title'>{post.title}</div>
                    <div>{post.userid}</div>
                    <img src={post.img} alt="no img" width={500} />
                    <div className='div-body'>{post.text}</div>
                </a>
            </div>
        ))}
        <Pagin postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate} curentPage={curentPage} />
    </div>)
}

export default GamePostsList;