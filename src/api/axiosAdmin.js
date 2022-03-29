import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/api/admin/',
    headers: {
        'content-type': 'application/json',
    }
})

export default axiosClient