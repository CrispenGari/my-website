import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaGoogleScholar,
  FaBrain,
  FaWandMagic,
  FaTerminal,
} from "react-icons/fa6";

import React, { useState } from "react";

const Blog = () => {
  const [typedText, setTypedText] = React.useState("");
  const [sqlInput, setSqlInput] = useState("");
  const [sqlOutput, setSqlOutput] = useState<string[]>([]);

  const profileTable = [{ name: "Tinashe", field: "AI Research" }];
  const fullText =
    "Building AI for mHealth, mAgric, and intelligent systems — 2026 Vision.";

  const runSQL = () => {
    const query = sqlInput.toLowerCase();

    if (query.includes("select * from profile")) {
      setSqlOutput(profileTable.map((r) => `${r.name} | ${r.field}`));
    } else if (query.includes("select name")) {
      setSqlOutput(profileTable.map((r) => r.name));
    } else if (query.includes("help")) {
      setSqlOutput([
        "Available commands:",
        "SELECT * FROM profile;",
        "SELECT name FROM profile;",
        "HELP;",
      ]);
    } else {
      setSqlOutput(["SQL Error: unsupported query"]);
    }

    setSqlInput("");
  };

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.img
          src="/me.png"
          alt="Tinashe Crispen Garidzira"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-gray-700"
        />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4 my__name"
        >
          Tinashe Crispen Garidzira
        </motion.h1>

        <p className="text-lg text-gray-300 font-mono">
          {typedText}
          <span className="animate-pulse">▋</span>
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/crispengari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/tinashe-crispen-garidzira-34437720b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social__icon" />
          </a>
          <a
            href="https://x.com/crispengari_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="social__icon" />
          </a>
          <a
            href="https://www.facebook.com/crispen.gari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social__icon" />
          </a>
          <a
            href="https://www.instagram.com/crispen_gari_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social__icon" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=NlqEWgUAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogleScholar className="social__icon" />
          </a>
          <a href="mailto:crispengari@gmail.com">
            <FaEnvelope className="social__icon" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
            <FaBrain className="header__icon" /> About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am a software developer and AI researcher focused on mobile health
            (mHealth), mobile agriculture (mAgric), deep learning, and machine
            learning. I build AI-powered systems that solve real-world problems
            using robust data-driven methods.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800/40 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <ul className="grid grid-cols-2 gap-3 text-gray-300 text-sm">
            <li>Python, C++, Java, TypeScript</li>
            <li>PyTorch, TensorFlow, Scikit-learn</li>
            <li>React, React Native, Vue</li>
            <li>Django, Flask</li>
            <li>PostgreSQL, MongoDB</li>
            <li>Docker, Git, Hugging Face</li>
          </ul>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="bg-black/40 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-12 flex items-center gap-3"
          >
            <FaWandMagic className="header__icon" /> Featured Work
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "NLP Research",
              "mHealth",
              "mAgric",
              "ML/DL",
              "Full-Stack Apps",
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/40 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{project}</h3>
                <p className="text-gray-400 text-sm">
                  Research-driven and production-ready projects focused on
                  real-world impact.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive SQL Terminal */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <FaTerminal /> Interactive SQL Console
        </h2>
        <div className="bg-black text-green-400 font-mono rounded-xl p-6 shadow-lg">
          {sqlOutput.map((line, i) => (
            <p key={i}>{line}</p>
          ))}

          <div
            style={{
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            }}
            className="flex items-center gap-2 mt-3"
          >
            <span>sqlite&gt;</span>
            <input
              value={sqlInput}
              onChange={(e) => setSqlInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runSQL()}
              className="bg-transparent outline-none flex-1"
              placeholder="try: HELP;"
              style={{
                fontFamily:
                  'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black/50 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-300">Email: crispengari@gmail.com</p>
        <p className="text-gray-300">Phone: +27 65 230 5879</p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tinashe Crispen Garidzira · Research · AI
      </footer>
    </div>
  );
};

export default Blog;
