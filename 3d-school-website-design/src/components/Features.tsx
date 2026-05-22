import { motion } from "framer-motion";

const features = [
  {
    icon: "👩‍🏫",
    title: "Fully Trained Teachers",
    desc: "Qualified, caring educators trained in modern Finnish teaching methods.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: "🏫",
    title: "Well-Built Infrastructure",
    desc: "Modern classrooms, safe campus, and well-maintained facilities for all.",
    color: "from-purple-400 to-indigo-500",
  },
  {
    icon: "💻",
    title: "Computer Lab from Class 1",
    desc: "Computer education starts right from 1st class — future-ready kids!",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "🎨",
    title: "Playful Teaching Style",
    desc: "Learning through games, stories, art & activities — no boring lectures!",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "🏐",
    title: "1 Acre Playground",
    desc: "Spacious green ground for sports, games, yoga, and outdoor fun.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: "📚",
    title: "1000+ Books Library",
    desc: "A vibrant library filled with stories, knowledge, and imagination.",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: "🧩",
    title: "100+ Educational Toys",
    desc: "A huge collection of toys for learning through play in every class.",
    color: "from-fuchsia-400 to-purple-500",
  },
  {
    icon: "🔬",
    title: "Dedicated Project Room",
    desc: "A creative space for experiments, projects, and hands-on learning.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    icon: "🌳",
    title: "Peaceful Environment",
    desc: "Calm, green, and safe surroundings ideal for focused learning.",
    color: "from-lime-400 to-green-500",
  },
  {
    icon: "🇮🇳",
    title: "Government School Trust",
    desc: "Run by the government — transparent, accountable, and accessible to all.",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: "🗣️",
    title: "English Medium",
    desc: "Quality English-medium education from the very first day.",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: "👦👧",
    title: "Co-Education",
    desc: "Open to both boys and girls — learning together in harmony.",
    color: "from-violet-400 to-indigo-500",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-cyan-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mb-3 inline-block text-5xl"
          >
            🛰️
          </motion.div>
          <h2 className="mb-3 text-4xl font-black text-slate-900 sm:text-6xl">
            Everything Your Child <span className="gradient-text">Needs to Soar</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            World-class facilities orbiting around your child's success — all completely FREE 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{
                y: -10,
                rotateY: 8,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="perspective-1000"
            >
              <div className="card-3d h-full rounded-3xl bg-white p-5 shadow-xl border-2 border-slate-100 hover:border-transparent hover:shadow-2xl sm:p-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-3xl shadow-lg sm:h-16 sm:w-16`}
                >
                  {f.icon}
                </motion.div>
                <h3 className="mb-2 text-base font-black text-slate-800 sm:text-lg">{f.title}</h3>
                <p className="text-xs text-slate-600 sm:text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
