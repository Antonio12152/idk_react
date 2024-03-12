import { useEffect, useState } from "react";
import axios from "axios";
import PostimgSingle from "../components/PostimgSingle"

const Postimg = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const currentUrl = window.location.href;
    const segments = currentUrl.split("/"); // Разбиваем URL на сегменты с помощью разделителя "/"
    const id = segments[segments.length - 1]; // Получаем последний сегмент, содержащий числовое значение
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            setPost(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, []);
    return (
        <div>
            <PostimgSingle post={post} loading={loading} />
        </div>
    )
}

export default Postimg