import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Post as IPost } from '../../interfaces/IPost';
import { getPosts } from '../../services/UserService'
import PostCard from './PostCard'

const Post = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    const validateId = () => {
        const userId: number = parseInt(id!)
        if(isNaN(userId) || userId < 1) return 0
        return userId
    }

    const handlePosts = async () => {
        const userId: number = validateId()
        const response = await getPosts(userId)
        if(!response) alert("No se encontraron publicaciones")
        else setPosts(response)
        setLoading(false)
    }

    useEffect(() => {
        handlePosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading) return null
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            { posts.map((post: IPost) => <PostCard key={post.id} post={post} /> ) }
        </div>
    )
}

export default Post;