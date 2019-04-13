import apisauce from 'apisauce';

const appBaseUrl = 'https://api.chucknorris.io';

const create = (baseURL = appBaseUrl) => {

    const api = apisauce.create({
        baseURL,
        timeout: 5000
    })

    const fetchRandomFact = () => api.get(`/jokes/random`)

    const fetchAllCategory = () => api.get(`/jokes/categories`)

    const fetchFactByCategory = (category) => api.get(`jokes/random?category=${category}`)

    return {
        fetchRandomFact,
        fetchAllCategory,
        fetchFactByCategory
    }
}

export default {
    create
}