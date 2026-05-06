import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true); // cek localStorage dulu saat mount

    // Load dari localStorage saat pertama kali app dibuka
    useEffect(() => {
        const storedToken = localStorage.getItem("rempah_token");
        const storedUser = localStorage.getItem("rempah_user");
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const saveSession = (newToken, newUser) => {
        localStorage.setItem("rempah_token", newToken);
        localStorage.setItem("rempah_user", JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
    };

    const login = async (phone, password) => {
        const res = await api.post("/login", { phone, password });
        saveSession(res.data.token, res.data.user);
        return res.data.user;
    };

    const register = async (data) => {
        const res = await api.post("/register", data);
        saveSession(res.data.token, res.data.user);
        return res.data.user;
    };

    const logout = async () => {
        try {
            await api.post("/logout", {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
        } catch (_) {
            // abaikan error jaringan saat logout
        }
        localStorage.removeItem("rempah_token");
        localStorage.removeItem("rempah_user");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook untuk dipakai di komponen lain
export function useAuth() {
    return useContext(AuthContext);
}
