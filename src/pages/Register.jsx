import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ROLES = [
    {
        value: "donatur",
        label: "Donatur",
        desc: "Saya memiliki makanan berlebih & ingin menyumbangkan.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: "orange",
    },
    {
        value: "relawan",
        label: "Relawan",
        desc: "Saya siap mengambil & mendistribusikan makanan.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        color: "green",
    },
];

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [role, setRole] = useState("");
    const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", nama_toko: "", alamat: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const payload = { name: form.name, email: form.email, phone: form.phone, password: form.password, role };
            if (role === "donatur") {
                payload.nama_toko = form.nama_toko;
                payload.alamat = form.alamat;
            }
            const user = await register(payload);
            navigate(user.role === "donatur" ? "/dashboard/donatur" : "/dashboard/relawan");
        } catch (err) {
            const errData = err?.response?.data;
            const msg = errData?.errors ? Object.values(errData.errors).flat().join(" ") : errData?.message || "Pendaftaran gagal.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 outline-none transition-all font-medium text-gray-900 placeholder-gray-400";
    const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl -z-10"></div>

            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block text-3xl font-extrabold text-green-800">
                        REMPAH
                    </Link>
                    <p className="text-gray-500 mt-2 font-medium">Bergabunglah bersama kami!</p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white p-8">
                    {/* Step Indicator */}
                    <div className="flex justify-center mb-7">
                        <div className="flex items-center gap-2 w-full max-w-md">
                            {[1, 2].map((s) => (
                                <div key={s} className="flex items-center gap-2 flex-1">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-400"}`}>{s}</div>

                                    {s < 2 && <div className={`flex-1 h-1 rounded-full transition-all ${step > s ? "bg-orange-400" : "bg-gray-100"}`}></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* STEP 1: Pilih Role */}
                    {step === 1 && (
                        <div>
                            <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Daftar Sebagai</h1>
                            <p className="text-gray-500 text-sm mb-6 font-medium">Pilih peran Anda di platform REMPAH.</p>
                            <div className="space-y-4">
                                {ROLES.map((r) => (
                                    <button
                                        key={r.value}
                                        type="button"
                                        onClick={() => setRole(r.value)}
                                        className={`w-full p-5 rounded-2xl border-2 text-left flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 ${
                                            role === r.value ? (r.color === "orange" ? "border-orange-400 bg-orange-50" : "border-green-500 bg-green-50") : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white"
                                        }`}
                                    >
                                        <div
                                            className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                                                role === r.value ? (r.color === "orange" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600") : "bg-gray-100 text-gray-500"
                                            }`}
                                        >
                                            {r.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg">{r.label}</h3>
                                            <p className="text-gray-500 text-sm font-medium">{r.desc}</p>
                                        </div>
                                        {role === r.value && (
                                            <div className={`ml-auto w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${r.color === "orange" ? "bg-orange-500" : "bg-green-500"}`}>
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => {
                                    if (role) setStep(2);
                                }}
                                disabled={!role}
                                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:transform-none"
                            >
                                Lanjutkan
                            </button>
                        </div>
                    )}

                    {/* STEP 2: Isi Form */}
                    {step === 2 && (
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center gap-3 mb-5">
                                <button type="button" onClick={() => setStep(1)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div>
                                    <h1 className="text-2xl font-extrabold text-gray-900">Data Diri</h1>
                                    <p className="text-gray-500 text-sm font-medium capitalize">Mendaftar sebagai {role}</p>
                                </div>
                            </div>

                            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl mb-5 text-sm font-medium">{error}</div>}

                            <div className="space-y-4">
                                <div>
                                    <label className={labelClass}>Nama Lengkap</label>
                                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nama lengkap Anda" required className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Email</label>
                                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Anda" required className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Nomor HP</label>
                                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="08xxxxxxxxxx" required className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Password</label>
                                    <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 karakter" required minLength={6} className={inputClass} />
                                </div>

                                {role === "donatur" && (
                                    <>
                                        <div>
                                            <label className={labelClass}>Nama Toko / Usaha</label>
                                            <input type="text" name="nama_toko" value={form.nama_toko} onChange={handleChange} placeholder="Contoh: Warung Makan Sari" required className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Alamat Lengkap</label>
                                            <textarea name="alamat" value={form.alamat} onChange={handleChange} placeholder="Jl. Contoh No.1, Kota..." rows={3} className={inputClass + " resize-none"} />
                                        </div>
                                    </>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>Mendaftar...
                                    </>
                                ) : (
                                    "Daftar Sekarang"
                                )}
                            </button>
                        </form>
                    )}

                    <p className="text-center text-gray-500 mt-6 font-medium text-sm">
                        Sudah punya akun?{" "}
                        <Link to="/login" className="text-orange-600 font-bold hover:text-orange-700 transition-colors">
                            Masuk di sini
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
