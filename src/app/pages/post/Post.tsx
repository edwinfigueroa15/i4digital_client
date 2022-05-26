import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { validateId } from '../../helpers';
import { Post as IPost } from '../../interfaces/IPost';
import { getPosts } from '../../services/UserService'
import PostCard from './PostCard'

const Post = () => {
    const { id } = useParams()
    const [ready, setReady] = useState(false)
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    const handlePosts = async () => {
        const userId: number = validateId(id!)
        const response = await getPosts(userId)
        setPosts(response)
        setLoading(false)
    }

    useEffect(() => {
        if(!ready) return setReady(true)
        handlePosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready])

    if(loading) return null
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            { posts.map((post: IPost) => <PostCard key={post.id} post={post} /> ) }
        </div>
    )
}

export default Post;