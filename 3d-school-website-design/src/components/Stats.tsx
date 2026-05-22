import { motion } from "framer-motion";

const stats = [
  { number: "1000+", label: "Books in Library", emoji: "📚", color: "from-amber-400 to-orange-500" },
  { number: "100+", label: "Educational Toys", emoji: "🧸", color: "from-pink-400 to-rose-500" },
  { number: "1 Acre", label: "Playground", emoji: "🏐", color: "from-green-400 to-emerald-500" },
  { number: "100%", label: "FREE Education", emoji: "🚀", color: "from-blue-400 to-indigo-500" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-3 inline-block text-5xl"
          >
            🚀
          </motion.div>
          <h2 className="mb-3 text-4xl font-black text-slate-900 sm:text-5xl">
            Numbers That <span className="gradient-text">Launch Success</span>
          </h2>
          <p className="text-lg text-slate-600">Real facilities fueling every student's journey to the stars ⭐</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.08,
                rotateY: 10,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="perspective-1000"
            >
              <div className={`card-3d relative rounded-3xl bg-gradient-to-br ${stat.color} p-6 shadow-2xl`}>
                <div className="absolute -right-3 -top-3 text-5xl animate-wiggle">{stat.emoji}</div>
                <div className="text-4xl font-black text-white sm:text-5xl text-shadow-lg">
                  {stat.number}
                </div>
                <div className="mt-2 font-bold text-white/95">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
