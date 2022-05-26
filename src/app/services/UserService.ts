import axios from 'axios'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = process.env.REACT_APP_API_URL

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`)
        const body = {
            date: new Date(),
            method: 'GET',
            url: `${API_URL}/users`,
            returned_data: JSON.stringify(response.data)
        }

        const responseRecord = await axios.post(`${BACKEND_URL}/record`, body)
        return JSON.parse(responseRecord.data.data.returned_data)

    } catch (error) {
        console.log(error)
    }
}

export const getAlbumsUser = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/albums?userId=${id}`)
        const body = {
            date: new Date(),
            method: 'GET',
            url: `${API_URL}/albums?userId=${id}`,
            returned_data: JSON.stringify(response.data)
        }

        const responseRecord = await axios.post(`${BACKEND_URL}/record`, body)
        return JSON.parse(responseRecord.data.data.returned_data)

    } catch (error) {
        console.log(error)
    }
}

export const getPhotosAlbumUser = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/photos?albumId=${id}`)
        const body = {
            date: new Date(),
            method: 'GET',
            url: `${API_URL}/photos?albumId=${id}`,
            returned_data: JSON.stringify(response.data)
        }

        const responseRecord = await axios.post(`${BACKEND_URL}/record`, body)
        return JSON.parse(responseRecord.data.data.returned_data)

    } catch (error) {
        console.log(error)
    }
}

export const getPosts = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/posts?userId=${id}`)
        const body = {
            date: new Date(),
            method: 'GET',
            url: `${API_URL}/posts?userId=${id}`,
            returned_data: JSON.stringify(response.data)
        }

        const responseRecord = await axios.post(`${BACKEND_URL}/record`, body)
        return JSON.parse(responseRecord.data.data.returned_data)

    } catch (error) {
        console.log(error)
    }
}