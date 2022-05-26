import { useEffect, useState } from 'react'
import { User as IUser } from '../../interfaces/IUser'
import { getUsers } from '../../services/UserService'
import UserCard from './UserCard'

const User = () => {
    const [ready, setReady] = useState(false)
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const handleUsers = async () => {
        const response = await getUsers()
        setUsers(response)
        setLoading(false)
    }

    useEffect(() => {
        if(!ready) return setReady(true)
        handleUsers()
    }, [ready])

    if(loading) return null
    return (
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            { users.map((user: IUser) => <UserCard key={user.id} user={user} /> ) }
        </div>
    )
}

export default User;