import { useEffect, useState } from "react"
import { updateRecord } from '../../services/RecordService'
import Swal from 'sweetalert2'

const RecordUpdate = ({ showModal, record, handleRecords }: any) => {
    const [ready, setReady] = useState(false)
    const [data, setData] = useState({
        method: record.Petition.method,
        url: record.Petition.url,
        date: record.Petition.date.substring(0, 10),
        returned_data: record.returned_data
    })

    const onChangeData = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        if(data.method === "" || data.url === "" || data.date === "" || data.returned_data === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            })
        } else {
            console.log(record.id_petition)
            console.log(data)
            const response = await updateRecord(record.id_petition, data)
            console.log(response)
            handleRecords()
            showModal(false)
        }
    }

    useEffect(() => {
        if(!ready) return setReady(true)
    }, [ready])

    if(!ready) return null
    return (
        <div className="modalContainer">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Actualizar Registro</h5>
                        <button type="button" className="btn-close" onClick={() => showModal(false)}></button>
                    </div>

                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="method" className="form-label">Metodo</label>
                            <input type="text" className="form-control" name="method" id="method" placeholder="Metodo" value={data.method} onChange={onChangeData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="url" className="form-label">Url</label>
                            <input type="text" className="form-control" name="url" id="url" placeholder="Url" value={data.url} onChange={onChangeData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Fecha</label>
                            <input type="date" className="form-control" name="date" id="date" placeholder="Fecha" value={data.date} onChange={onChangeData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="returned_data" className="form-label">Registro</label>
                            <textarea className="form-control" name="returned_data" id="returned_data" value={data.returned_data} onChange={onChangeData} rows={5}></textarea>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordUpdate