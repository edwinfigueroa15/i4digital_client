import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { validateId } from '../../helpers';
import { Album as IAlbum } from '../../interfaces/IAlbum';
import { getAlbumsUser } from '../../services/UserService'
import AlbumCard from './AlbumCard';

const Album = () => {
    const { id } = useParams()
    const [ready, setReady] = useState(false)
    const [loading, setLoading] = useState(true)
    const [albums, setAlbums] = useState([])

    const handleAlbums = async () => {
        const userId: number = validateId(id!)
        const response = await getAlbumsUser(userId)
        setAlbums(response)
        setLoading(false)
    }

    useEffect(() => {
        if(!ready) return setReady(true)
        handleAlbums()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready])

    if(loading) return null
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', rowGap: '10px' }}>
           { albums.map((album: IAlbum) => <AlbumCard key={album.id} album={album} /> ) }
        </div>
    )
}

export default Album;