import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ROLES = [
    {
        value: "relawan",
        title: "Relawan",
        desc: "Jadilah penghubung yang penting. Bantu antarkan surplus dari mitra kami langsung ke pusat-pusat komunitas dan keluarga yang membutuhkan.",
        image: "/images/volunteer-hero.png",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        theme: {
            bg: "bg-[#9B4819]",
            btnBg: "bg-[#FFF4ED]",
            btnText: "text-[#9B4819]",
            btnHover: "hover:bg-[#FFE8D6]",
        },
        buttonText: "Daftar Sekarang",
    },
    {
        value: "donatur",
        title: "Mitra UMKM",
        desc: "Daftarkan restoran, toko kelontong Anda untuk menyumbangkan kelebihan makanan berkualitas tinggi secara aman dan efisien.",
        image: "/images/food-partner-cartoon.png",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        theme: {
            bg: "bg-[#057A3A]",
            btnBg: "bg-[#E6F8ED]",
            btnText: "text-[#057A3A]",
            btnHover: "hover:bg-[#D1F1DF]",
        },
        buttonText: "Daftar Sekarang",
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
        "w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 outline-none transition-all font-medium text-gray-900 placeholder-gray-400";
    const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
    const iconContainerClass = "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none";

    return (
        <div className={`min-h-screen ${step === 1 ? "bg-[#FCFAF8] pt-12 pb-16" : "bg-stone-50 flex items-center justify-center py-16"} px-4 relative overflow-hidden font-sans`}>
            {step === 1 ? (
                <div className="w-full max-w-5xl mx-auto z-10 relative">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-[#231F20] mb-4 tracking-tight text-green-800">Join the Rescue</h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-10">
                        {ROLES.map((r) => (
                            <div
                                key={r.value}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col border border-gray-100 cursor-pointer"
                            >
                                {/* Header Image */}
                                <div className="h-56 relative bg-gray-100">
                                    <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent top-auto h-24 bottom-0"></div>
                                    {/* Icon overlapping */}
                                    <div className={`absolute bottom-4 left-8 w-16 h-16 rounded-full ${r.theme.bg} flex items-center justify-center text-white shadow-lg`}>{r.icon}</div>
                                </div>

                                <div className="p-8 pt-4 flex-1 flex flex-col">
                                    <h3 className="text-[28px] font-extrabold text-[#231F20] mb-3 tracking-tight">{r.title}</h3>
                                    <p className="text-[#5C5C5C] mb-8 leading-relaxed font-medium">{r.desc}</p>

                                    <button
                                        onClick={() => {
                                            setRole(r.value);
                                            setStep(2);
                                        }}
                                        className={`mt-auto w-full py-4 px-6 ${r.theme.btnBg} ${r.theme.btnText} ${r.theme.btnHover} rounded-xl font-bold flex items-center justify-between transition-colors cursor-pointer`}
                                    >
                                        {r.buttonText}
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-2xl relative z-10 mx-auto">
                    {/* Background decorations for Step 2 */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl -z-10"></div>

                    <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-white p-10">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center gap-4 mb-8">
                                <button type="button" onClick={() => setStep(1)} className="text-gray-400 hover:text-gray-600 transition-colors p-2 -ml-2 rounded-xl hover:bg-gray-100">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div>
                                    <h1 className="text-3xl font-extrabold text-gray-900">Data Diri</h1>
                                    <p className="text-gray-500 font-medium capitalize mt-1">Mendaftar sebagai {role}</p>
                                </div>
                            </div>

                            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl mb-6 text-sm font-medium">{error}</div>}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClass}>Nama Lengkap</label>
                                    <div className="relative">
                                        <div className={iconContainerClass}>
                                            <svg className="w-5 h-5 text-[#9B4819]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </div>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nama lengkap Anda" required className={inputClass} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Email</label>
                                    <div className="relative">
                                        <div className={iconContainerClass}>
                                            <svg className="w-5 h-5 text-[#9B4819]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Anda" required className={inputClass} />
                                    </div>
                                </div>
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
                                        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 karakter" required minLength={6} className={inputClass} />
                                    </div>
                                </div>

                                {role === "donatur" && (
                                    <>
                                        <div className="md:col-span-2">
                                            <label className={labelClass}>Nama Toko / Usaha</label>
                                            <div className="relative">
                                                <div className={iconContainerClass}>
                                                    <svg className="w-5 h-5 text-[#9B4819]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V10m0 0a2 2 0 00-2-2h-1.5m3.5 2a2 2 0 012 2v1h-11v-1a2 2 0 012-2m-3.5-2a2 2 0 00-2 2v11m15-11V6a2 2 0 00-2-2H7a2 2 0 00-2 2v4m14 0H5m4 11v-5a2 2 0 012-2h2a2 2 0 012 2v5" /></svg>
                                                </div>
                                                <input type="text" name="nama_toko" value={form.nama_toko} onChange={handleChange} placeholder="Contoh: Warung Makan Sari" required className={inputClass} />
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelClass}>Alamat Lengkap</label>
                                            <div className="relative">
                                                <div className={`${iconContainerClass} items-start pt-3.5`}>
                                                    <svg className="w-5 h-5 text-[#9B4819]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                </div>
                                                <textarea name="alamat" value={form.alamat} onChange={handleChange} placeholder="Jl. Contoh No.1, Kota..." rows={3} className={`${inputClass} resize-none`} />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
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
                        <p className="text-center text-gray-500 mt-8 font-medium text-sm">
                            Sudah punya akun?{" "}
                            <Link to="/login" className="text-orange-600 font-bold hover:text-orange-700 transition-colors">
                                Masuk di sini
                            </Link>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
