import { useEffect, useState } from "react";
import axios from "axios";
import PostsimgList from "../components/PostsimgList";

const Postsimg = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [curentPage, setCurentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, []);
    console.log(posts)
    const indexOfLastPost = curentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const curentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurentPage(pageNumber)

    return (
        <div>
            <PostsimgList posts={posts} curentPost={curentPost} loading={loading} postsPerPage={postsPerPage} paginate={paginate} curentPage={curentPage}/>
        </div>
    )
}

export default Postsimg