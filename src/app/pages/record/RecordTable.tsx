import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Record as IRecord, RecordTableProps } from "../../interfaces/IRecord"
import { removeRecord } from '../../services/RecordService'
import RecordShow from './RecordShow'
import RecordUpdate from './RecordUpdate'

const RecordTable = ({ records, handleRecords }: RecordTableProps ) => {
    const [ready, setReady] = useState(false)
    const [modal, setModal] = useState(false)
    const [showinfo, setShowInfo] = useState(false)
    const [info, setInfo] = useState<IRecord>()

    const deleteRecord = (id: string) => {
        Swal.fire({
            title: 'Esta segur@?',
            text: "Se va a borrar permanentemente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await removeRecord(id)
                handleRecords()
                Swal.fire('Eliminado!', 'El registro fue eliminado correctamente.', 'success')
            }
        })
    }

    useEffect(() => {
        if(!ready) return setReady(true)
    }, [ready])

    if(!ready) return null
    return (
        <>
        <div  className="table-responsive container">
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Metodo</th>
                        <th>Url</th>
                        <th>Fecha</th>
                        <th>Datos</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((record: IRecord) => (
                            <tr key={record.id}>
                                <td style={{  }}>{ record.Petition.method }</td>
                                <td>{ record.Petition.url }</td>
                                <td>{ record.Petition.date.toString().substring(0, 10) }</td>
                                <td>{ record.returned_data.substring(0, 40) }...</td>
                                <td>
                                    <button className='btn btn-secondary btn-sm' onClick={() => {
                                        setInfo(record)
                                        setShowInfo(true)
                                    }}>
                                        <i className="bi bi-eye-fill"></i>
                                    </button>
                                    <button className='btn btn-primary btn-sm' onClick={() => {
                                        setInfo(record)
                                        setModal(true)
                                    }}>
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button className='btn btn-danger btn-sm' onClick={() => deleteRecord(record.id_petition)}>
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        { modal ? <RecordUpdate showModal={setModal} record={info} handleRecords={handleRecords} /> : null }
        { showinfo ? <RecordShow showModal={setShowInfo} record={info} /> : null }
        </>
    )
}

export default RecordTable