import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Album as IAlbum } from '../../interfaces/IAlbum';
import { getAlbumsUser } from '../../services/UserService'
import AlbumCard from './AlbumCard';

const Album = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [albums, setAlbums] = useState([])

    const validateId = () => {
        const userId: number = parseInt(id!)
        if(isNaN(userId) || userId < 1) return 0
        return userId
    }

    const handleAlbums = async () => {
        const userId: number = validateId()
        const response = await getAlbumsUser(userId)
        if(!response) alert("No se encontraron albunes")
        else setAlbums(response)
        setLoading(false)
    }

    useEffect(() => {
        handleAlbums()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading) return null
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', rowGap: '10px' }}>
           { albums.map((album: IAlbum) => <AlbumCard key={album.id} album={album} /> ) }
        </div>
    )
}

export default Album;