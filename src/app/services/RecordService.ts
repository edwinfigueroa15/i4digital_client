import axios from 'axios'
import { Response } from '../interfaces/IResponse'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const getRecords = async () => {
    try {
        const response: Response = await axios.get(`${BACKEND_URL}/record`)
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export const updateRecord = async (id: string, body: any) => {
    try {
        const response: Response = await axios.put(`${BACKEND_URL}/record/${id}`, body)
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export const removeRecord = async (id: string) => {
    try {
        const response: Response = await axios.delete(`${BACKEND_URL}/record/${id}`)
        return response.data

    } catch (error) {
        console.log(error)
    }
}