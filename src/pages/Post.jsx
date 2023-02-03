import PostList from "../components/PostsList"
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => { setPosts(result.data) })
    }, []);

    return (
        <div><PostList posts={posts} /></div>
    )
}

export default Post