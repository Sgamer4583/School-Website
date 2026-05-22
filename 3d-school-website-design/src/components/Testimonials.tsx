import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "My son started learning computers from class 1 itself! The Finnish method makes him love school. And everything is completely free — we can't believe it!",
    name: "Mrs. Lakshmi Devi",
    role: "Parent of Class 2 student",
    emoji: "👩",
    color: "from-pink-400 to-rose-500",
  },
  {
    quote: "The free kit (bag, uniform, books) saved us so much money. The playground is huge — 1 full acre! My daughter is so happy here.",
    name: "Mr. Ramesh Kumar",
    role: "Parent of Class 4 student",
    emoji: "👨",
    color: "from-purple-400 to-indigo-500",
  },
  {
    quote: "Breakfast and mid-day meals are provided free. Teachers are so caring and well-trained. The library has over 1000 books — my child reads every day!",
    name: "Mrs. Sunita Reddy",
    role: "Parent of Class 5 student",
    emoji: "👩‍🦰",
    color: "from-cyan-400 to-blue-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-4xl font-black text-slate-900 sm:text-6xl">
            Happy <span className="gradient-text">Parents Say</span>
          </h2>
          <p className="text-lg text-slate-600">Real stories from our MPPS family 💕</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, rotateY: 5 }}
              className="perspective-1000"
            >
              <div className="card-3d relative h-full rounded-3xl bg-white p-8 shadow-xl">
                <div className="absolute -top-6 left-8 text-6xl text-pink-400">"</div>
                <p className="mb-6 pt-4 text-slate-700 italic leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-2xl shadow-lg`}>
                    {t.emoji}
                  </div>
                  <div>
                    <div className="font-black text-slate-800">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
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
