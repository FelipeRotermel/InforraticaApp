import axios from 'axios'

const api = axios.create({
    baseURL: "https://silver-spoon-vj57479jgvp2x59q-8000.app.github.dev/"
    
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