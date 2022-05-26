import { PhotoCardProps } from "../../interfaces/IPhoto";

const PhotoCard = ({ photo }: PhotoCardProps) => {
    return (
        <div className="card" style={{ width: '250px' }}>
            <img src={photo.thumbnailUrl} className="card-img-top" alt="..." width="250px" height="250px" />
            <div className="card-body">
                <p className="card-text">{photo.title}</p>
            </div>
        </div>
    )
}

export default PhotoCard;