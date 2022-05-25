import axios from 'axios'

export const getUsers = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getAlbumsUser = async (id: number) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getPhotosAlbumUser = async (id: number) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getPosts = async (id: number) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}