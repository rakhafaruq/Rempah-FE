import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function SelesaikanDistribusi() {
    const { claim_id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        receiver_name: "",
        receiver_type: "",
        location: "",
        story: "",
    });
    const [photo, setPhoto] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPhoto(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setPhoto(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleRemovePhoto = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPhoto(null);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
            setPreviewUrl(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!photo) {
            setError("Foto bukti distribusi wajib diunggah.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("claim_id", claim_id);
            formData.append("receiver_name", form.receiver_name);
            formData.append("receiver_type", form.receiver_type);
            formData.append("location", form.location);
            formData.append("story", form.story);
            formData.append("photo", photo);

            await api.post("/distributions", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setSuccess(true);
            setTimeout(() => {
                navigate("/dashboard/relawan");
            }, 2000);
        } catch (err) {
            const errData = err?.response?.data;
            const msg = errData?.errors 
                ? Object.values(errData.errors).flat().join(", ") 
                : errData?.message || "Terjadi kesalahan saat mengunggah bukti.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-400 focus:ring-4 focus:ring-green-400/10 outline-none transition-all font-medium text-gray-900";
    const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
                <button 
                    onClick={() => navigate("/dashboard/relawan")}
                    className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">Selesaikan Distribusi</h1>
                    <p className="text-gray-500 mt-1 font-medium">Unggah foto bukti bahwa makanan telah disalurkan.</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                {success && (
                    <div className="mb-6 p-4 bg-teal-50 text-teal-700 border border-teal-200 rounded-2xl flex items-center gap-3 font-medium">
                        <svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Bukti berhasil dikirim! Mengarahkan kembali...
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-2xl font-medium">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className={labelClass}>Foto Bukti Penyaluran <span className="text-red-500">*</span></label>
                            {photo && previewUrl ? (
                                <div className="mt-1 relative rounded-2xl overflow-hidden border-2 border-gray-200">
                                    <img src={previewUrl} alt="Preview Bukti" className="w-full h-64 object-cover" />
                                    <button
                                        type="button"
                                        onClick={handleRemovePhoto}
                                        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl shadow-lg transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <span className="font-medium text-sm">Hapus Foto</span>
                                    </button>
                                </div>
                            ) : (
                                <label
                                    htmlFor="file-upload"
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className={`mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-dashed rounded-2xl transition-colors cursor-pointer relative ${
                                        isDragging ? "border-green-500 bg-green-50" : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                                    }`}
                                >
                                    <div className="space-y-2 text-center pointer-events-none">
                                        <svg className={`mx-auto h-14 w-14 ${isDragging ? "text-green-500" : "text-gray-400"}`} stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-base text-gray-600 justify-center items-center">
                                            <span className="font-medium text-green-600 bg-white px-3 py-1 rounded-md shadow-sm">Unggah Foto</span>
                                        </div>
                                        <p className="text-sm text-gray-500 pt-1">atau tarik dan lepas di sini</p>
                                    </div>
                                    <input id="file-upload" name="file-upload" type="file" accept="image/*" onChange={handleFileChange} className="sr-only" />
                                </label>
                            )}
                        </div>

                        <div>
                            <label className={labelClass}>Nama Penerima</label>
                            <input 
                                type="text" 
                                name="receiver_name" 
                                value={form.receiver_name} 
                                onChange={handleChange} 
                                placeholder="Contoh: Panti Asuhan Kasih" 
                                required 
                                className={inputClass} 
                            />
                        </div>

                        <div>
                            <label className={labelClass}>Jenis Penerima</label>
                            <select 
                                name="receiver_type" 
                                value={form.receiver_type} 
                                onChange={handleChange} 
                                required 
                                className={inputClass}
                            >
                                <option value="" disabled>Pilih Jenis Penerima...</option>
                                <option value="pemulung">Pemulung</option>
                                <option value="tunawisma">Tunawisma</option>
                                <option value="ojol">Ojek Online (Ojol)</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelClass}>Lokasi Distribusi Lengkap</label>
                            <input 
                                type="text" 
                                name="location" 
                                value={form.location} 
                                onChange={handleChange} 
                                placeholder="Alamat atau tempat penyaluran" 
                                required 
                                className={inputClass} 
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelClass}>Catatan Tambahan (Opsional)</label>
                            <textarea 
                                name="story" 
                                value={form.story} 
                                onChange={handleChange} 
                                placeholder="Ceritakan sedikit tentang penyaluran ini..." 
                                rows={3} 
                                className={`${inputClass} resize-none`} 
                            />
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <button
                            type="button"
                            onClick={() => navigate("/dashboard/relawan")}
                            className="px-6 py-3 mr-4 font-bold text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            disabled={loading || success}
                            className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-all shadow-md shadow-green-500/30 disabled:opacity-70 flex items-center gap-2"
                        >
                            {loading ? (
                                <><div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div> Mengirim...</>
                            ) : "Kirim Bukti Distribusi"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
