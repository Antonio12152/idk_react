import { useEffect, useState } from "react";
// import axios from "axios";
import gamepost from '../database/gamepost.json'
import GamePostSingle from "../components/GamePostSingle";

const GamePost = () => {
    const posts = gamepost
    const currentUrl = window.location.href
    const segments = currentUrl.split("/")
    const pageid = segments[segments.length - 1]
    
    // const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

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

    return (
        <div>
            <GamePostSingle post={posts[pageid-1]} loading={loading} />
        </div>
    )
}

export default GamePost