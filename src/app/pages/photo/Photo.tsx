import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { validateId } from '../../helpers';
import { getPhotosAlbumUser } from '../../services/UserService'
import { Photo as IPhoto } from "../../interfaces/IPhoto";
import PhotoCard from "./PhotoCard";

const Photo = () => {
    const { id } = useParams()
    const [ready, setReady] = useState(false)
    const [loading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([])

    const handlePhotos = async () => {
        const userId: number = validateId(id!)
        const response = await getPhotosAlbumUser(userId)
        setPhotos(response)
        setLoading(false)
    }

    useEffect(() => {
        if(!ready) return setReady(true)
        handlePhotos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready])

    if(loading) return null
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignContent: 'center' }}>
            { photos.map((photo: IPhoto) => <PhotoCard key={photo.id} photo={photo} /> ) }
        </div>
    )
}

export default Photo;