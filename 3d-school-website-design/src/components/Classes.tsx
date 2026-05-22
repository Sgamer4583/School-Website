import { motion } from "framer-motion";

const classes = [
  {
    grade: "Nursery",
    age: "3-4 years",
    emoji: "🧸",
    color: "from-pink-400 to-rose-500",
    bg: "from-pink-100 to-rose-200",
    highlights: ["Playful learning", "Story time", "Motor skills"],
    description: "A gentle, joyful start to learning through play, music, and discovery.",
  },
  {
    grade: "KG",
    age: "4-5 years",
    emoji: "🎈",
    color: "from-orange-400 to-pink-500",
    bg: "from-orange-100 to-pink-200",
    highlights: ["Alphabet fun", "Number games", "Art & craft"],
    description: "Building strong foundations with creative activities and early literacy.",
  },
  {
    grade: "Class 1",
    age: "5-6 years",
    emoji: "💻",
    color: "from-yellow-400 to-orange-500",
    bg: "from-yellow-100 to-orange-200",
    highlights: ["Computer Lab begins", "Reading basics", "Math puzzles"],
    description: "Computer education starts here! Plus stories, numbers & hands-on fun.",
  },
  {
    grade: "Class 2",
    age: "6-7 years",
    emoji: "✏️",
    color: "from-green-400 to-emerald-500",
    bg: "from-green-100 to-emerald-200",
    highlights: ["Writing skills", "Computer basics", "Science fun"],
    description: "Building confidence through reading, writing, and creative computer projects.",
  },
  {
    grade: "Class 3",
    age: "7-8 years",
    emoji: "🔬",
    color: "from-teal-400 to-cyan-500",
    bg: "from-teal-100 to-cyan-200",
    highlights: ["Project Room fun", "Multiplication", "Experiments"],
    description: "Exploring the world in our project room through experiments and creativity.",
  },
  {
    grade: "Class 4",
    age: "8-9 years",
    emoji: "🌍",
    color: "from-blue-400 to-indigo-500",
    bg: "from-blue-100 to-indigo-200",
    highlights: ["Geography", "Advanced Computer", "Library reading"],
    description: "Critical thinking through diverse subjects, computer skills & library exploration.",
  },
  {
    grade: "Class 5",
    age: "9-10 years",
    emoji: "🎓",
    color: "from-purple-400 to-violet-600",
    bg: "from-purple-100 to-violet-200",
    highlights: ["Advanced Math", "Public speaking", "Leadership"],
    description: "Preparing young leaders for higher studies with confidence and Finnish-style learning.",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-pink-50 to-white py-24">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-4 inline-block text-6xl"
          >
            📚
          </motion.div>
          <h2 className="mb-3 text-4xl font-black text-slate-900 sm:text-6xl">
            Classes We <span className="gradient-text">Offer</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Hover over each card to flip and discover what makes each grade special! ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-700">💻 Computer from Class 1</span>
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700">🇫🇮 Finnish System</span>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">🎁 100% FREE</span>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">🍎 Free Meals</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.grade}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flip-card h-72"
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className={`flip-card-front rounded-3xl bg-gradient-to-br ${cls.color} p-6 shadow-2xl flex flex-col justify-between`}>
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-white/30 backdrop-blur-sm px-4 py-2">
                      <span className="font-black text-white">{cls.grade}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                      className="text-5xl drop-shadow-lg"
                    >
                      {cls.emoji}
                    </motion.span>
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-bold text-white/90">Age: {cls.age}</div>
                    <div className="text-sm text-white/80">Hover to flip →</div>
                  </div>
                </div>

                {/* Back */}
                <div className={`flip-card-back rounded-3xl bg-gradient-to-br ${cls.bg} p-6 shadow-2xl border-4 border-white`}>
                  <div className="flex h-full flex-col">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-3xl">{cls.emoji}</span>
                      <h3 className="text-xl font-black text-slate-800">{cls.grade}</h3>
                    </div>
                    <p className="mb-4 text-sm text-slate-700">{cls.description}</p>
                    <div className="space-y-2">
                      {cls.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <span className="text-pink-500">✓</span>
                          {h}
                        </div>
                      ))}
                    </div>
                    <motion.a
                      href="#admission"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-center text-sm font-bold text-white shadow-lg"
                    >
                      🚀 Enroll Now
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
