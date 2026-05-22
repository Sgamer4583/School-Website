import { motion } from "framer-motion";

const marqueeItems = [
  "🎁 100% FREE Admission",
  "📚 Free Bag, Uniform & Books",
  "🇫🇮 Finnish Education System",
  "💻 Computer Education from Class 1",
  "🍎 Breakfast & Mid-day Meals",
  "🏐 1 Acre Playground",
  "📖 1000+ Books Library",
  "🧸 100+ Educational Toys",
  "👦👧 For Boys & Girls",
];

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y-4 border-orange-300 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-4">
      <motion.div
        className="flex gap-12 whitespace-nowrap animate-marquee"
        style={{ width: "max-content" }}
      >
        {items.map((item, i) => (
          <span key={i} className="text-lg font-black text-white sm:text-xl">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
