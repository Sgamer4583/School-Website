import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-16 pb-6 text-white">
      {/* Decorative stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="mb-2 text-3xl font-black">
                <span className="gradient-text">MPPS</span> Girls Gandhari
              </h3>
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-300">🇮🇳 Govt. School</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300">📖 English Medium</span>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-300">🎁 100% Free</span>
              </div>
              <p className="max-w-md text-sm text-slate-300">
                A government school for boys & girls, following the Finnish Education System.
                Nurturing confident, creative young learners from Nursery to Class 5. 🌟
              </p>
            </motion.div>

          </div>

          <div>
            <h4 className="mb-4 font-black text-pink-300">📞 Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📍 Gandhari, Telangana, India</li>
              <li>📱 +91 94906 50868</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-black text-pink-300">🔗 Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#why-special" className="hover:text-pink-300">Why Choose Us</a></li>
              <li><a href="#classes" className="hover:text-pink-300">Classes</a></li>
              <li><a href="#admission" className="hover:text-pink-300">Free Admission</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <div>© 2026 MPPS Girls Gandhari. All rights reserved. 💖</div>
          <div>Made with ❤️ for our bright girls</div>
        </div>
      </div>
    </footer>
  );
}
