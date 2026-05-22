import { motion } from "framer-motion";

export default function YouTubeChannel() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-pink-600 py-20">
      {/* Animated background circles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* YouTube Logo */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6 inline-block"
          >
            <div className="flex items-center justify-center gap-3 rounded-3xl bg-white px-8 py-4 shadow-2xl">
              {/* YouTube Icon SVG */}
              <svg
                viewBox="0 0 28 20"
                className="h-12 w-16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.4 3.1c-.3-1.2-1.3-2.1-2.5-2.4C22.6 0 14 0 14 0S5.4 0 3.1.7C1.9 1 .9 1.9.6 3.1 0 5.4 0 10 0 10s0 4.6.6 6.9c.3 1.2 1.3 2.1 2.5 2.4C5.4 20 14 20 14 20s8.6 0 10.9-.7c1.2-.3 2.2-1.2 2.5-2.4.6-2.3.6-6.9.6-6.9s0-4.6-.6-6.9z"
                  fill="#FF0000"
                />
                <path d="M11.2 14.3l7.2-4.3-7.2-4.3v8.6z" fill="#FFFFFF" />
              </svg>
              <span className="text-2xl font-black text-slate-900 sm:text-3xl">YouTube</span>
            </div>
          </motion.div>

          <h2 className="mb-3 text-4xl font-black text-white sm:text-5xl text-shadow-lg">
            Watch Us in Action! 🎬
          </h2>
          <p className="mb-2 text-lg font-bold text-white/95 sm:text-xl">
            Subscribe to our official YouTube channel
          </p>
          <p className="mb-8 text-base text-white/90">
            See our students learning, playing, and growing every day ✨
          </p>

          {/* Channel name badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur-sm sm:text-base"
          >
            <span>📺</span>
            <span>@bompellybhavani</span>
          </motion.div>

          <div>
            <motion.a
              href="https://www.youtube.com/@bompellybhavani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-black text-red-600 shadow-2xl transition-all hover:bg-red-50"
            >
              {/* YouTube play icon */}
              <svg viewBox="0 0 28 20" className="h-6 w-8">
                <path
                  d="M27.4 3.1c-.3-1.2-1.3-2.1-2.5-2.4C22.6 0 14 0 14 0S5.4 0 3.1.7C1.9 1 .9 1.9.6 3.1 0 5.4 0 10 0 10s0 4.6.6 6.9c.3 1.2 1.3 2.1 2.5 2.4C5.4 20 14 20 14 20s8.6 0 10.9-.7c1.2-.3 2.2-1.2 2.5-2.4.6-2.3.6-6.9.6-6.9s0-4.6-.6-6.9z"
                  fill="#FF0000"
                />
                <path d="M11.2 14.3l7.2-4.3-7.2-4.3v8.6z" fill="#FFFFFF" />
              </svg>
              <span>View Channel</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
