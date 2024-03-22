import { useEffect, useState } from "react";
//import axios from "axios";
import gamepost from '../database/gamepost.json'
import GamePostsList from "../components/GamePostsList";

const GamePosts = () => {
    const posts = gamepost
    // const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    let [curentPage, setCurentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
        setLoading(true)
        console.log(gamepost) // добавить
        setLoading(false)
    }, []);
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true)
    //         const res = await axios.get(gamepost)
    //         setPosts(res.data)
    //         setLoading(false)
    //     }
    //     fetchPosts()
    // }, []);
    const indexOfLastPost = curentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const curentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurentPage(pageNumber)

    return (
        <div>
            <GamePostsList posts={posts} curentPost={curentPost} loading={loading} postsPerPage={postsPerPage} paginate={paginate} curentPage={curentPage}/>
        </div>
    )
}

export default GamePosts