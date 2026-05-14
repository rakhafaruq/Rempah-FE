import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('rempah_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.warn("Sesi tidak valid atau telah kedaluwarsa. Melakukan auto-logout...");
            
            localStorage.removeItem('rempah_token');
            localStorage.removeItem('rempah_user');
            if (window.location.pathname !== '/login') {
                window.location.href = '/login?session=expired';
            }
        }
        
        return Promise.reject(error);
    }
);

export default api;