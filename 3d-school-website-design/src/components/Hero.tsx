import { motion } from "framer-motion";

const floatingSpace = [
  { emoji: "🚀", top: "15%", left: "8%", delay: 0, size: "text-6xl", rotation: -45, duration: 3 },
  { emoji: "🌟", top: "12%", right: "10%", delay: 0.5, size: "text-5xl", rotation: 0, duration: 2 },
  { emoji: "🪐", top: "60%", left: "5%", delay: 1, size: "text-5xl", rotation: 15, duration: 4 },
  { emoji: "⭐", top: "18%", left: "40%", delay: 0.3, size: "text-4xl", rotation: 0, duration: 2.5 },
  { emoji: "👩‍🚀", top: "25%", right: "6%", delay: 0.8, size: "text-5xl", rotation: -10, duration: 3.5 },
  { emoji: "🌙", bottom: "22%", right: "8%", delay: 1.2, size: "text-5xl", rotation: 15, duration: 4 },
  { emoji: "🚀", bottom: "30%", left: "12%", delay: 0.6, size: "text-4xl", rotation: 45, duration: 3 },
  { emoji: "☄️", top: "75%", right: "15%", delay: 0.9, size: "text-4xl", rotation: -30, duration: 2.8 },
  { emoji: "✨", top: "45%", left: "3%", delay: 1.1, size: "text-3xl", rotation: 0, duration: 2 },
  { emoji: "🛰️", top: "70%", right: "3%", delay: 1.3, size: "text-4xl", rotation: 20, duration: 3.2 },
];

// Shooting stars
const shootingStars = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 50}%`,
  delay: Math.random() * 5,
  duration: 2 + Math.random() * 2,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      {/* Starry grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Twinkling stars background */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((s) => (
        <motion.div
          key={`shoot-${s.id}`}
          className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{ top: s.top }}
          initial={{ left: "-20%", opacity: 0, rotate: -15 }}
          animate={{ left: ["−20%", "120%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating space emojis */}
      {floatingSpace.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} select-none drop-shadow-xl`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            rotate: item.rotation,
          }}
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -25, 0],
            rotate: [item.rotation, item.rotation + 15, item.rotation],
          }}
          transition={{
            delay: item.delay,
            y: { duration: item.duration, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: item.duration + 1, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.8, ease: "backOut" },
            opacity: { duration: 0.8 },
          }}
        >
          <span className="inline-block">{item.emoji}</span>
        </motion.div>
      ))}

      {/* Glowing nebula orbs */}
      <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-purple-400/40 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-cyan-300/40 blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Top badges */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-orange-300 bg-white/80 px-4 py-1.5 text-xs font-bold text-orange-700 shadow-lg backdrop-blur-sm sm:text-sm">
            🇮🇳 Government School
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-blue-300 bg-white/80 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-lg backdrop-blur-sm sm:text-sm">
            📖 English Medium
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-green-300 bg-white/80 px-4 py-1.5 text-xs font-bold text-green-700 shadow-lg backdrop-blur-sm sm:text-sm">
            👦👧 For Boys & Girls
          </span>
        </motion.div>

        {/* Free education rocket banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-6 py-2.5 text-sm font-black text-white shadow-2xl shadow-pink-400/50 sm:text-base"
        >
          <motion.span
            animate={{ rotate: [0, -15, 15, 0], y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            🚀
          </motion.span>
          <span>100% FREE Education + FREE Kit (Bag, Uniform & Books)</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 text-5xl font-black tracking-tight text-slate-900 sm:text-7xl lg:text-8xl text-shadow-lg"
        >
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            MPPS
          </span>{" "}
          <span className="text-slate-800">Girls</span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Gandhari
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-4 max-w-3xl text-lg font-semibold text-slate-700 sm:text-xl"
        >
          Launching Young Minds into a{" "}
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-black">
            🚀 Stellar Future
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-4 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          With the{" "}
          <span className="font-black text-blue-600">🇫🇮 Finnish Education System</span>,
          every child rockets ahead through playful learning!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-10 text-sm font-semibold text-slate-500 sm:text-base"
        >
          Nursery → Class 5 • 1-Acre Campus • Computer Lab from Class 1 💻
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#admission"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-pink-400/50"
          >
            {/* Rocket trail effect */}
            <motion.span
              className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl"
              animate={{ x: [-50, 300], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            >
              🔥
            </motion.span>
            <span className="relative z-10 flex items-center gap-2">
              🚀 Launch Your Admission
              <motion.span
                animate={{ x: [0, 5, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#why-special"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-purple-400 bg-white/90 px-8 py-4 text-lg font-bold text-purple-700 shadow-lg backdrop-blur-sm hover:bg-purple-50"
          >
            🌌 Explore Our Universe
          </motion.a>
        </motion.div>

        {/* Rocket launch animation at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-slate-600">SCROLL TO BLAST OFF</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl"
            >
              🚀
            </motion.div>
            <motion.div
              animate={{ opacity: [1, 0.3, 1], scaleY: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-2xl origin-top"
            >
              🔥
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
