import { getUsers, getAlbumsUser, getPhotosAlbumUser, getPosts } from './app/services/UserService'

const App = () => {
    const showUsers = async () => {
        const response = await getUsers()
        console.log(response)
    }

    const showAlbumsUser = async () => {
        const response = await getAlbumsUser(1)
        console.log(response)
    }

    const showPhotosAlbumUser = async () => {
        const response = await getPhotosAlbumUser(1)
        console.log(response)
    }

    const showPosts = async () => {
        const response = await getPosts(1)
        console.log(response)
    }

    return (
        <div>
            <button className='btn btn-secondary' onClick={showUsers}>Ver Usuarios</button>
            <button className='btn btn-dark' onClick={showAlbumsUser}>Ver Albunes</button>
            <button className='btn btn-danger' onClick={showPhotosAlbumUser}>Ver Fotos</button>
            <button className='btn btn-primary' onClick={showPosts}>Ver Posts</button>
        </div>
    )
}

export default App;
