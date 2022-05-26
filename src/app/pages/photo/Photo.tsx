import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getPhotosAlbumUser } from '../../services/UserService'
import { Photo as IPhoto } from "../../interfaces/IPhoto";
import PhotoCard from "./PhotoCard";

const Photo = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([])

    const validateId = () => {
        const userId: number = parseInt(id!)
        if(isNaN(userId) || userId < 1) return 0
        return userId
    }

    const handlePhotos = async () => {
        const userId: number = validateId()
        const response = await getPhotosAlbumUser(userId)
        if(!response) alert("No se encontraron fotos")
        else setPhotos(response)
        setLoading(false)
    }

    useEffect(() => {
        handlePhotos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading) return null
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignContent: 'center' }}>
            { photos.map((photo: IPhoto) => <PhotoCard key={photo.id} photo={photo} /> ) }
        </div>
    )
}

export default Photo;