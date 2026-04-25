import React from "react";
import { motion } from "framer-motion";

// Import Custom Components
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import ResourceGrid from "@/Components/ResourceGrid";
import P3TKSection from "@/Components/P3TKSection";
import Gallery from "@/Components/Gallery";
import Footer from "@/Components/Footer";
import LoadingSpinner from "@/Components/Spinner";
import NotFound from "@/Components/NotFound";

// UPDATE THIS LINK WITH YOUR GOOGLE DRIVE URL
const GOOGLE_DRIVE_URL = "https://drive.google.com/drive/folders/1ZXou0vBp52PmdjYtnvjZgUlc_v2epOX7";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [is404, setIs404] = React.useState(false);

  React.useEffect(() => {
    // Logic for 404 check
    const path = window.location.pathname;
    if (path !== "/" && path !== "" && !path.startsWith("/#")) {
      setIs404(true);
    }

    // Simulate initial loading for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (is404) {
    return <NotFound />;
  }

  return (
    <div className="relative min-h-screen bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-700">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#1EB2A6]/5 rounded-full blur-[150px]" />
      </div>
      
      <Navbar />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Sections with unique IDs for navigation */}
        <div id="home">
          <HeroSection />
        </div>

        <div id="p3tk">
          <P3TKSection />
        </div>

        <div id="gallery">
          <Gallery />
        </div>
        
        <div id="data-akad" className="bg-white/30 dark:bg-slate-900/10 backdrop-blur-3xl">
          <ResourceGrid googleDriveUrl={GOOGLE_DRIVE_URL} />
        </div>
        
        
      </motion.main>

      <Footer />
    </div>
  );
}
