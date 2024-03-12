import { Routes, Route} from 'react-router-dom';
import Post from './pages/Post';
import Postsimg from './pages/Postsimg';
import Postimg from './pages/Postimg'
const BaseRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Post />} />
                <Route path='/postimg/' element={<Postsimg />} />
                <Route path='/postimg/:id' element={<Postimg />} />
            </Routes>
        </div>
    )
}
export default BaseRoute;