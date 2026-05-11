import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// 1. REQUEST INTERCEPTOR (Yang lama)
// Bertugas menyisipkan token ke setiap request yang mau berangkat
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('rempah_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 2. RESPONSE INTERCEPTOR (Fitur Baru)
// Bertugas mencegat setiap respons/balasan dari backend
api.interceptors.response.use(
    (response) => {
        // Jika request sukses (200 OK), biarkan lewat
        return response;
    },
    (error) => {
        // Jika ada error dari backend, kita periksa jenis error-nya
        if (error.response && error.response.status === 401) {
            console.warn("Sesi tidak valid atau telah kedaluwarsa. Melakukan auto-logout...");
            
            // Hapus token lama yang sudah hangus
            localStorage.removeItem('rempah_token');
            localStorage.removeItem('rempah_user');
            
            // Cegah infinite loop jika pengguna sudah berada di halaman login
            if (window.location.pathname !== '/login') {
                // Lempar kembali ke halaman login (menggunakan reload agar state React bersih)
                window.location.href = '/login?session=expired';
            }
        }
        
        // Teruskan error ke komponen (seperti CariDonasi) agar loading/spinner bisa dimatikan
        return Promise.reject(error);
    }
);

export default api;