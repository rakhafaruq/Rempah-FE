import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ phone: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setError(""); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const user = await login(form.phone, form.password);
            navigate(user.role === "donatur" ? "/dashboard/donatur" : "/dashboard/relawan");
        } catch (err) {
            setError(err?.response?.data?.message || "Login gagal. Periksa kembali data Anda.");
        } finally { setLoading(false); }
    };

    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block text-3xl font-extrabold text-green-800 hover:text-green-700 transition-colors">REMPAH</Link>
                    <p className="text-gray-500 mt-2 font-medium">Selamat datang kembali!</p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white p-8">
                    <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Masuk ke Akun</h1>
                    <p className="text-gray-500 mb-7 font-medium text-sm">Gunakan nomor HP yang terdaftar.</p>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl mb-5 text-sm font-medium flex items-center gap-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor HP</label>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="08xxxxxxxxxx" required
                                className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} placeholder="Masukkan password" required
                                    className="w-full px-4 pr-12 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {showPassword
                                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
                                        }
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button type="submit" disabled={loading}
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2">
                            {loading ? <><div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>Memproses...</> : "Masuk"}
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-6 font-medium text-sm">
                        Belum punya akun?{" "}
                        <Link to="/register" className="text-orange-600 font-bold hover:text-orange-700 transition-colors">Daftar sekarang</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
