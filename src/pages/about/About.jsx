import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import OurMission from "./components/OurMission";
import PhotoGallery from "./components/PhotoGallery";
import AboutCTA from "./components/AboutCTA";

export default function About() {
    return (
        <div className="w-full bg-stone-50 overflow-hidden font-sans">
            <AboutHero />
            <OurStory />
            <OurMission />
            <PhotoGallery />
            <AboutCTA />
        </div>
    );
}
