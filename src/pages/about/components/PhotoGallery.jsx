import aksiNyata1 from "../../../assets/aksi_nyata-1.jpeg";
import aksiNyata2 from "../../../assets/aksi_nyata-2.jpeg";
import aksiNyata3 from "../../../assets/aksi_nyata-3.jpeg";

export default function PhotoGallery() {
    const photos = [
        {
            id: 1,
            src: aksiNyata2,
            alt: "Relawan mengambil makanan",
            position: "rotate-6 translate-x-12 -translate-y-12 sm:translate-x-20 sm:-translate-y-20 z-20",
        },
        {
            id: 2,
            src: aksiNyata1,
            alt: "Komunitas",
            position: "-rotate-6 -translate-x-4 translate-y-8 sm:-translate-x-8 sm:translate-y-12 z-30",
        },
        {
            id: 3,
            src: aksiNyata3,
            alt: "Aksi nyata",
            position: "rotate-12 translate-x-12 translate-y-12 sm:translate-x-24 sm:translate-y-20 z-40",
        }
    ];

    return (
        <section className="py-24 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Bagian Kiri: Tulisan */}
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left z-10 relative">
                        <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Aksi Nyata di Lapangan</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                            Kami Tidak Hanya Bicara<br className="hidden lg:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600">
                                Kami Bergerak
                            </span>
                        </h2>
                        <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
                            Inilah momen-momen nyata ketika makanan bertemu tangan yang membutuhkan. 
                            Difasilitasi oleh jaringan kebaikan Rempah, setiap aksi adalah langkah nyata 
                            menuju Indonesia bebas kelaparan dan minim sisa makanan.
                        </p>
                    </div>

                    {/* Bagian Kanan: Tumpukan Foto */}
                    <div className="relative h-[450px] sm:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-orange-300/40 to-green-300/40 rounded-full blur-3xl"></div>
                        
                        {photos.map((photo) => (
                            <div 
                                key={photo.id}
                                className={`absolute transform ${photo.position}`}
                            >
                                <div className="bg-white p-2.5 sm:p-3.5 pb-8 sm:pb-12 rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100">
                                    <div className="w-40 h-48 sm:w-56 sm:h-64 rounded-xl overflow-hidden bg-gray-100">
                                        <img 
                                            src={photo.src} 
                                            alt={photo.alt}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://images.unsplash.com/photo-1593113514676-5fa62d295ce8?q=80&w=600&auto=format&fit=crop"; 
                                            }}
                                        />
                                    </div>
                                    <div className="absolute bottom-2.5 sm:bottom-4 left-0 w-full text-center">
                                        <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">{photo.alt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
