import { Routes, Route } from 'react-router-dom';
import Post from './pages/Post';
import Postimg from './pages/Postimg';
const BaseRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Post />} />
                <Route path='/postimg' element={<Postimg />} />
            </Routes>
        </div>
    )
}
export default BaseRoute;