import axios from 'axios'

const api = axios.create({
    baseURL: "http://191.52.55.47:19003/"
    
  })

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`    
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default api