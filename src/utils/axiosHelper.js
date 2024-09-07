import axios from "axios"

const axiosHelper = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: false,
})

export default axiosHelper
