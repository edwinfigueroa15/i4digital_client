import { useEffect, useState } from 'react'
import { getRecords } from '../../services/RecordService'
import RecordTable from './RecordTable'

const Record = () => {
    const [ready, setReady] = useState(false)
    const [loading, setLoading] = useState(true)
    const [records, setRecords] = useState([])

    const handleRecords = async () => {
        const response = await getRecords()
        setRecords(response?.data)
        setLoading(false)
    }

    useEffect(() => {
        if(!ready) return setReady(true)
        handleRecords()
    }, [ready])

    if(loading) return null
    return (
        <RecordTable records={records} handleRecords={handleRecords} />
    )
}

export default Record