import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const classOptions = [
  { id: "nursery", label: "Nursery", emoji: "🧸", age: "3-4 yrs", color: "from-pink-400 to-rose-500" },
  { id: "kg", label: "KG", emoji: "🎈", age: "4-5 yrs", color: "from-orange-400 to-pink-500" },
  { id: "1", label: "Class 1", emoji: "📖", age: "5-6 yrs", color: "from-yellow-400 to-orange-500" },
  { id: "2", label: "Class 2", emoji: "✏️", age: "6-7 yrs", color: "from-green-400 to-emerald-500" },
  { id: "3", label: "Class 3", emoji: "🔬", age: "7-8 yrs", color: "from-teal-400 to-cyan-500" },
  { id: "4", label: "Class 4", emoji: "🌍", age: "8-9 yrs", color: "from-blue-400 to-indigo-500" },
  { id: "5", label: "Class 5", emoji: "🎓", age: "9-10 yrs", color: "from-purple-400 to-violet-600" },
];

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
}

export default function Admission() {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass) {
      alert("Please select a class to apply for!");
      return;
    }

    // Build WhatsApp message
    const className = classOptions.find((c) => c.id === selectedClass)?.label || selectedClass;
    const message = `🎓 *NEW ADMISSION APPLICATION* 🎓
_MPPS Girls Gandhari_

📚 *Class Applied:* ${className}

👧 *Student Name:* ${formData.studentName}
🎂 *Date of Birth:* ${formData.dob}

👨‍👩‍👧 *Parent/Guardian:* ${formData.parentName}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏠 *Address:* ${formData.address}

_Please contact the parent for admission process._`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/919490650868?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Trigger rocket launch confetti
    const pieces: Confetti[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ["#ec4899", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981", "#f97316"][Math.floor(Math.random() * 6)],
      delay: Math.random() * 0.6,
    }));
    setConfetti(pieces);
    setTimeout(() => setSubmitted(true), 800);
  };

  const reset = () => {
    setSubmitted(false);
    setConfetti([]);
    setSelectedClass("");
    setFormData({ studentName: "", dob: "", parentName: "", phone: "", email: "", address: "" });
  };

  return (
    <section id="admission" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-24">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, 800],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-white"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-4 inline-block text-6xl"
          >
            🎁
          </motion.div>
          <h2 className="mb-3 text-4xl font-black sm:text-6xl text-shadow-lg">
            FREE Admission Form
          </h2>
          <p className="text-lg text-white/90">
            Enroll your child today — secure a bright future at zero cost! 🌟
          </p>
        </motion.div>

        {/* Free Kit Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-center text-white shadow-2xl sm:p-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-bold sm:text-base">
            <span>🎁 FREE School Bag</span>
            <span>•</span>
            <span>👕 FREE Uniform</span>
            <span>•</span>
            <span>📚 FREE Books</span>
            <span>•</span>
            <span>🍎 FREE Meals</span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 shadow-2xl sm:p-10"
            >
              {/* Class Selection */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-black text-slate-800 flex items-center gap-2">
                  <span className="text-2xl">📚</span> Select Class to Apply
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                  {classOptions.map((opt) => (
                    <motion.button
                      type="button"
                      key={opt.id}
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedClass(opt.id)}
                      className={`relative overflow-hidden rounded-2xl p-4 text-center transition-all ${
                        selectedClass === opt.id
                          ? `bg-gradient-to-br ${opt.color} text-white shadow-xl ring-4 ring-white`
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <div className="text-3xl">{opt.emoji}</div>
                      <div className="mt-1 text-sm font-black">{opt.label}</div>
                      <div className={`text-xs ${selectedClass === opt.id ? "text-white/80" : "text-slate-500"}`}>
                        {opt.age}
                      </div>
                      {selectedClass === opt.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold"
                        >
                          ✓
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputField
                  label="👧 Student's Name"
                  value={formData.studentName}
                  onChange={(v) => setFormData({ ...formData, studentName: v })}
                  required
                  placeholder="Enter full name"
                />
                <InputField
                  label="🎂 Date of Birth"
                  type="date"
                  value={formData.dob}
                  onChange={(v) => setFormData({ ...formData, dob: v })}
                  required
                />
                <InputField
                  label="👨‍👩‍👧 Parent/Guardian Name"
                  value={formData.parentName}
                  onChange={(v) => setFormData({ ...formData, parentName: v })}
                  required
                  placeholder="Enter parent name"
                />
                <InputField
                  label="📱 Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                  required
                  placeholder="10-digit mobile"
                />
                <InputField
                  label="📧 Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  required
                  placeholder="you@example.com"
                />
                <div className="sm:col-span-2">
                  <InputField
                    label="🏠 Home Address"
                    value={formData.address}
                    onChange={(v) => setFormData({ ...formData, address: v })}
                    required
                    placeholder="Full address"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 py-4 text-lg font-black text-white shadow-2xl shadow-purple-400/50"
              >
                🚀 Submit via WhatsApp
              </motion.button>

              <p className="mt-4 text-center text-xs text-slate-500">
                🎓 This is a Government School — Admission is 100% FREE.<br/>
                📱 On submit, WhatsApp will open with your details. Just press send!
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-10 text-center shadow-2xl"
            >
              {/* Rocket trail confetti */}
              {confetti.map((c) => (
                <motion.div
                  key={c.id}
                  className="absolute h-3 w-3 rounded-full"
                  style={{ background: c.color, left: `${c.x}%`, bottom: 0 }}
                  initial={{ y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    y: -500,
                    x: (Math.random() - 0.5) * 200,
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{ duration: 2, delay: c.delay, ease: "easeOut" }}
                />
              ))}

              {/* Launching rocket */}
              <motion.div
                initial={{ y: 200, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                className="relative mb-4 inline-block"
              >
                <motion.div
                  animate={{ rotate: [-5, 5, -5], y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-8xl drop-shadow-2xl"
                >
                  🚀
                </motion.div>
                {/* Rocket flames */}
                <motion.div
                  animate={{ scaleY: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl origin-top"
                >
                  🔥
                </motion.div>
                {/* Smoke puffs */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                    animate={{
                      x: (Math.random() - 0.5) * 100,
                      y: 50 + i * 10,
                      opacity: [0, 0.8, 0],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                    style={{ left: "50%", bottom: "-10px" }}
                  >
                    💨
                  </motion.div>
                ))}
              </motion.div>

              {/* Twinkling stars */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`bg-star-${i}`}
                  className="absolute text-xs"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                  transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() }}
                >
                  ✨
                </motion.div>
              ))}

              <h3 className="mb-3 text-3xl font-black text-slate-900">🎉 BLAST OFF!</h3>
              <h4 className="mb-2 text-xl font-bold text-purple-700">Application Received!</h4>
              <p className="mb-2 text-lg text-slate-600">
                Thank you, <span className="font-bold text-purple-600">{formData.parentName}</span>!
              </p>
              <p className="mb-6 text-slate-600">
                Your child's journey to{" "}
                <span className="font-bold text-purple-600">
                  {classOptions.find((c) => c.id === selectedClass)?.label}
                </span> has been launched! 🚀
                <br />Our admission team will call you at <span className="font-bold">{formData.phone}</span> within 24 hours.
              </p>
              <div className="mb-6 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 p-4 text-left text-sm">
                <div className="font-bold text-slate-800">📋 Application Summary:</div>
                <div className="mt-2 space-y-1 text-slate-700">
                  <div>👧 Student: {formData.studentName}</div>
                  <div>🎓 Class Applied: {classOptions.find((c) => c.id === selectedClass)?.label}</div>
                  <div>📧 Email: {formData.email}</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={reset}
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg"
              >
                🚀 Launch Another Application
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 transition-all focus:border-purple-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple-100"
      />
    </label>
  );
}
