import { Link } from "react-router-dom"
import { UserCardProps } from "../../interfaces/IUser";

const UserCard = ({ user }: UserCardProps) => {
    const { id, name, username, address, phone, email } = user

    return (
        <div className="card" style={{ flex: '1 1 300px' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
                <p className="card-text">Suite {address.suite}, Calle {address.street}, Ciudad {address.city}, Codigo {address.zipcode}</p>
                <p className="card-text p-0 m-0">Correo: {email}</p>
                <p className="card-text p-0 m-0">Celular: {phone}</p>   
            </div>
            <div className="card-footer">
                <Link to={`/posts/${id}`} className="card-link">Ver publicaciones</Link>
                <Link to={`/album/${id}`} className="card-link">Ver albunes</Link>
            </div>
        </div>
    )
}

export default UserCard;