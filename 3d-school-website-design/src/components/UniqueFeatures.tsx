import { motion } from "framer-motion";

const highlights = [
  {
    title: "Finnish Education System",
    emoji: "🇫🇮",
    desc: "We implement Finland's world-class education approach — learning through play, curiosity, and joy. No rote memorization, just deep understanding.",
    color: "from-blue-400 to-cyan-500",
    tag: "World's Best Method",
    details: ["Play-based learning", "No stressful exams", "Child-centered", "Joy of discovery"],
  },
  {
    title: "100% FREE Kit",
    emoji: "🎁",
    desc: "Every enrolled student receives a complete FREE kit containing a school bag, full uniform set, and all textbooks — completely free of cost!",
    color: "from-green-400 to-emerald-500",
    tag: "Zero Cost",
    details: ["Free School Bag 🎒", "Free Uniform 👕", "Free Textbooks 📚", "No hidden charges"],
  },
  {
    title: "Breakfast & Mid-day Meals",
    emoji: "🍎",
    desc: "Nutritious breakfast and wholesome mid-day meals served daily — ensuring no child learns on an empty stomach. Healthy body, sharp mind!",
    color: "from-orange-400 to-red-500",
    tag: "Healthy & Free",
    details: ["Hot breakfast 🥣", "Balanced mid-day meal 🍱", "Fresh & hygienic", "Nutritious snacks 🥛"],
  },
];

export default function UniqueFeatures() {
  return (
    <section id="why-special" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-purple-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-4 inline-block text-7xl drop-shadow-xl"
          >
            🚀
          </motion.div>
          <h2 className="mb-3 text-4xl font-black text-slate-900 sm:text-6xl">
            Our <span className="gradient-text">Rocket Fuel</span> Features
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            What propels our students to stellar success — three powerhouse pillars ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -12,
                rotateY: 8,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="perspective-1000"
            >
              <div className={`card-3d relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${h.color} p-8 shadow-2xl`}>
                {/* Tag */}
                <div className="absolute right-4 top-4 rounded-full bg-white/30 px-3 py-1 text-xs font-black text-white backdrop-blur-sm">
                  {h.tag}
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="mb-4 inline-block text-7xl drop-shadow-2xl"
                >
                  {h.emoji}
                </motion.div>

                <h3 className="mb-3 text-2xl font-black text-white">{h.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/95">{h.desc}</p>

                <div className="space-y-2 border-t border-white/30 pt-4">
                  {h.details.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm font-bold text-white">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs">✓</span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
