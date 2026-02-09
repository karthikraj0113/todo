import axios from 'axios'
import Cookies from 'js-cookie';
export let  api = axios.create({
        baseURL: 'https://dummyjson.com',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
        },
        timeout: 60000,
    })

 api.interceptors.request.use(
        (config) => {
            let token = Cookies.get('Auth-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );


