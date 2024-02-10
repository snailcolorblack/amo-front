import axios from 'axios';


const httpClient = axios.create({
    baseURL: 'http://localhost:33000',
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers':'*',
    },
});

export default httpClient;