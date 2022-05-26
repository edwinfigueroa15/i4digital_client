import { useEffect, useState } from "react"

const RecordShow = ({ showModal, record }: any) => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if(!ready) return setReady(true)
    }, [ready])

    if(!ready) return null
    return (
        <div className="modalContainer">
            <div className="modal-dialog">
                <div className="modal-content" style={{ overflow: 'scroll', maxHeight: 'calc(100vh - 60px)' }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Registros</h5>
                        <button type="button" className="btn-close" onClick={() => showModal(false)}></button>
                    </div>

                    <div className="modal-body">
                        {record.returned_data}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordShow