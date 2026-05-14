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

    const inputClass =
        "w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 outline-none transition-all font-medium text-gray-900 placeholder-gray-400";
    const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
    const iconContainerClass = "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none";

    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center py-16 px-4 relative overflow-hidden font-sans">
            <div className="w-full max-w-xl relative z-10 mx-auto">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl -z-10"></div>

                <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-white p-10">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center gap-4 mb-8">
                            <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors p-2 -ml-2 rounded-xl hover:bg-gray-100">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </Link>
                            <div>
                                <h1 className="text-3xl font-extrabold text-gray-900">Masuk ke Akun</h1>
                                <p className="text-gray-500 font-medium mt-1">Selamat datang kembali!</p>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl mb-6 text-sm font-medium flex items-center gap-2">
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className={labelClass}>Nomor HP</label>
                                <div className="relative">
                                    <div className={iconContainerClass}>
                                        <svg className="w-5 h-5 text-[#9B4819]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="08xxxxxxxxxx" required className={inputClass} />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Password</label>
                                <div className="relative">
                                    <div className={iconContainerClass}>
                                        <svg className="w-5 h-5 text-[#9B4819]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </div>
                                    <input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} placeholder="Masukkan password" required className={inputClass} />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {showPassword
                                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
                                            }
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>Memproses...
                                </>
                            ) : (
                                "Masuk"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-8 font-medium text-sm">
                        Belum punya akun?{" "}
                        <Link to="/register" className="text-orange-600 font-bold hover:text-orange-700 transition-colors">
                            Daftar sekarang
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
