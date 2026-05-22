import { motion } from "framer-motion";

export default function RocketDivider() {
  return (
    <div className="relative h-16 overflow-hidden bg-gradient-to-r from-transparent via-slate-100 to-transparent">
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 flex items-center gap-2 text-3xl"
        initial={{ x: "-20%" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      >
        <span className="text-2xl">💨</span>
        <span className="text-2xl">💨</span>
        <span>🚀</span>
      </motion.div>
      {/* Orbit path */}
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
    </div>
  );
}
