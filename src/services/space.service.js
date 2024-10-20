import axiosPrivate from '../api/axios.js'

const createSpace = async ({ header, customMessage, theme, spaceName, isStarRating, questions }) => {
    try {
        const response = await axiosPrivate.post('/v1/spaces/create-space', { header, customMessage, theme, spaceName, isStarRating, questions })
        return response;
    } catch (error) {
        console.log(error)
    }
}

const deleteSpace = async (spaceId) => {
    try {
        await axiosPrivate.delete(`/v1/spaces/${spaceId}`)
    } catch (error) {
        console.log(error)
    }
}

const updateSpace = async ({ header, customMessage, theme, spaceName, isStarRating, questions, spaceId }) => {
    try {
        await axiosPrivate.patch(`/v1/spaces/${spaceId}`, { header, customMessage, theme, spaceName, isStarRating, questions })
    } catch (error) {
        console.log(error)
    }
}

const getSpaceById = async (spaceId) => {
    try {
        const { data } = await axiosPrivate.get(`/v1/spaces/${spaceId}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

const getUserSpaces = async () => {
    try {
        const { data } = await axiosPrivate.get('/v1/spaces')
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export { createSpace, deleteSpace, getSpaceById, getUserSpaces, updateSpace }