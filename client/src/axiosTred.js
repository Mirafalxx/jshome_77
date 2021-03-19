import axios from 'axios';

const axiosTred = axios.create({
    baseURL: 'http://localhost:8000',
})


export default axiosTred;