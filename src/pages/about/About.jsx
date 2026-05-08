import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import OurMission from "./components/OurMission";
import OurImpact from "./components/OurImpact";
import PhotoGallery from "./components/PhotoGallery";
import AboutCTA from "./components/AboutCTA";

/**
 * About Page — Halaman Tentang Kami
 *
 * Struktur komponen:
 * ├── AboutHero     — Header hero dengan stats singkat
 * ├── OurStory      — Latar belakang & timeline Rempah
 * ├── OurMission    — Misi, visi, dan nilai kami
 * ├── OurImpact     — Angka dampak nyata
 * ├── PhotoGallery  — Galeri foto kegiatan lapangan (tambahkan foto Anda di sini!)
 * └── AboutCTA      — Ajakan bergabung & link navigasi
 */
export default function About() {
    return (
        <div className="w-full bg-stone-50 overflow-hidden font-sans">
            <AboutHero />
            <OurStory />
            <OurMission />
            <OurImpact />
            <PhotoGallery />
            <AboutCTA />
        </div>
    );
}
