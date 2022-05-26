import { NavLink } from "react-router-dom"
import { AlbumCardProps } from "../../interfaces/IAlbum";

const AlbumCard = ({ album }: AlbumCardProps) => {
    return (
        <NavLink to={`/photos/${album.id}`} className="card-link m-0" style={{ flex: '1 1 100%' }}>
            <div className="card">
                <div className="card-header">{album.title}</div>
            </div>
        </NavLink>
    )
}

export default AlbumCard;