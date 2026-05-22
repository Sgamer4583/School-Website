import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import RocketDivider from "./components/RocketDivider";
import UniqueFeatures from "./components/UniqueFeatures";
import Classes from "./components/Classes";
import Features from "./components/Features";

import Admission from "./components/Admission";
import YouTubeChannel from "./components/YouTubeChannel";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-white/40 bg-white/70 px-6 py-3 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ y: [0, -3, 0], rotate: [-10, 10, -10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              🚀
            </motion.div>
            <div className="text-sm font-black text-slate-800 sm:text-base">
              <span className="gradient-text">MPPS</span> Girls Gandhari
            </div>
          </div>
          <div className="hidden gap-6 text-sm font-bold text-slate-700 md:flex">
            <a href="#why-special" className="hover:text-pink-600 transition-colors">Why Us</a>
            <a href="#classes" className="hover:text-pink-600 transition-colors">Classes</a>
            <a href="#admission" className="hover:text-pink-600 transition-colors">Admissions</a>
          </div>
          <motion.a
            href="#admission"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-orange-500 to-pink-600 px-4 py-2 text-xs font-bold text-white shadow-lg sm:text-sm"
          >
            🚀 Launch
          </motion.a>
        </div>
      </motion.nav>

      <Hero />
      <Marquee />
      <Stats />
      <RocketDivider />
      <UniqueFeatures />
      <RocketDivider />
      <Classes />
      <RocketDivider />
      <Features />
      <Admission />
      <YouTubeChannel />
      <Footer />
    </div>
  );
}
