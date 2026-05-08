/**
 * PhotoGallery.jsx
 *
 * Komponen galeri foto untuk menampilkan dokumentasi kegiatan pembagian makanan.
 * Ganti src pada array `photos` dengan path foto asli Anda.
 * Jika foto belum tersedia, placeholder akan ditampilkan secara otomatis.
 */
export default function PhotoGallery() {
    const photos = [
        {
            id: 1,
            src: null, // Ganti dengan: "/photos/kegiatan-1.jpg"
            alt: "Tim Rempah membagikan makanan kepada warga",
            caption: "Distribusi makanan di kawasan Manggarai, Jakarta",
            tag: "Distribusi",
            tagColor: "bg-orange-100 text-orange-700",
        },
        {
            id: 2,
            src: null, // Ganti dengan: "/photos/kegiatan-2.jpg"
            alt: "Relawan mengambil makanan dari restoran mitra",
            caption: "Pickup makanan dari mitra donatur kami",
            tag: "Pickup",
            tagColor: "bg-green-100 text-green-700",
        },
        {
            id: 3,
            src: null, // Ganti dengan: "/photos/kegiatan-3.jpg"
            alt: "Kegiatan bagi-bagi makanan gratis",
            caption: "Ratusan porsi berhasil didistribusikan dalam sehari",
            tag: "Komunitas",
            tagColor: "bg-amber-100 text-amber-700",
        },
        {
            id: 4,
            src: null, // Ganti dengan: "/photos/kegiatan-4.jpg"
            alt: "Tim Rempah bersama penerima manfaat",
            caption: "Senyum para penerima adalah semangat kami",
            tag: "Dampak",
            tagColor: "bg-teal-100 text-teal-700",
        },
    ];

    return (
        <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Aksi Nyata di Lapangan</span>
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Kami Tidak Hanya Bicara —{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600">
                            Kami Bergerak
                        </span>
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto">
                        Inilah momen-momen nyata ketika makanan bertemu tangan yang membutuhkan,
                        difasilitasi oleh jaringan kebaikan Rempah.
                    </p>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Image area */}
                            <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-orange-50 to-green-50">
                                {photo.src ? (
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    /* Placeholder jika foto belum ditambahkan */
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
                                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-400 text-center font-medium leading-snug">
                                            Tambahkan foto<br />kegiatan Anda di sini
                                        </p>
                                        <code className="text-xs bg-orange-50 text-orange-500 px-2 py-1 rounded font-mono">
                                            src: "/photos/..."
                                        </code>
                                    </div>
                                )}

                                {/* Tag badge */}
                                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${photo.tagColor} shadow-sm`}>
                                    {photo.tag}
                                </span>
                            </div>

                            {/* Caption */}
                            <div className="p-4">
                                <p className="text-sm text-gray-700 font-semibold leading-snug">{photo.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-400 font-medium">
                        📸 Foto-foto kegiatan nyata akan ditampilkan di sini — dokumentasi langsung dari lapangan.
                    </p>
                </div>
            </div>
        </section>
    );
}
