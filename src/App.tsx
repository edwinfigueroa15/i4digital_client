import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './app/components/Navbar';

import User from './app/pages/user/User';
import Post from './app/pages/post/Post';
import Album from './app/pages/album/Album';
import Photo from './app/pages/photo/Photo';
import NotFoundPage from './app/pages/error/NotFoundPage';
import Footer from './app/components/Footer';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<User/>} ></Route>
                <Route path="/posts/:id" element={<Post/>} ></Route>
                <Route path="/album/:id" element={<Album/>} ></Route>
                <Route path="/photos/:id" element={<Photo/>} ></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default App;
