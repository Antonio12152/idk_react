import { Routes, Route} from 'react-router-dom';
import Post from './pages/Post';
import Postsimg from './pages/Postsimg';
import Postimg from './pages/Postimg'
import GamePosts from './pages/GamePosts';
import GamePost from './pages/GamePost';
const BaseRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Post />} />
                <Route path='/postimg/' element={<Postsimg />} />
                <Route path='/postimg/page/' element={<Postsimg />} />
                <Route path='/postimg/page/:curentPage' element={<Postsimg />} />
                <Route path='/postimg/post/:id' element={<Postimg />} />
                <Route path='/gamepost/' element={<GamePosts />} />
                <Route path='/gamepost/page/' element={<GamePosts />} />
                <Route path='/gamepost/page/:curentPage' element={<GamePosts />} />
                <Route path='/gamepost/post/:id' element={<GamePost />} />
            </Routes>
        </div>
    )
}
export default BaseRoute;