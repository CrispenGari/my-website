import { motion } from "framer-motion";
import { FaTerminal, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center"
      >
        {/* Big 404 */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-bold mb-4 page__not__found"
        >
          <span className="text-7xl md:text-8xl font-bold mb-4 four__zero__four">
            4
          </span>
          <span className="text-7xl md:text-8xl font-bold mb-4 text-green-400  four__zero__four">
            0
          </span>
          <span className="text-7xl md:text-8xl font-bold mb-4 four__zero__four">
            4
          </span>
        </motion.h1>

        <p className="text-xl text-gray-300 mb-6">
          Page not found. The model couldn't infer this route.
        </p>

        {/* Terminal Box */}
        <div
          style={{
            fontFamily:
              'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
          }}
          className="bg-black text-green-400 font-mono rounded-xl p-6 text-left shadow-lg mb-8"
        >
          <p
            style={{
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            }}
          >
            <FaTerminal className="inline mr-2" />
            crispen@ai-lab:~$ cd /requested-page
          </p>
          <p
            className="text-red-400"
            style={{
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            }}
          >
            bash: directory not found
          </p>
          <p
            className="mt-2 text-gray-500"
            style={{
              fontFamily:
                'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            }}
          >
            Hint: Try navigating back to the homepage.
          </p>
        </div>

        {/* Back Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition font-semibold"
        >
          <FaHome />
          Go back home
        </Link>
      </motion.div>
    </div>
  );
}
