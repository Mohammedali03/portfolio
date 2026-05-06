import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 bg-slate-50 dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 dark:text-dark-muted text-center sm:text-left"
          >
            Built with{' '}
            <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> using{' '}
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Vite
            </a>
            ,{' '}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              React
            </a>
            , &{' '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Tailwind CSS
            </a>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-gray-500 dark:text-dark-muted"
          >
            <span>© {new Date().getFullYear()}</span>
            <span className="font-medium text-gray-700 dark:text-dark-text">
              Mohammed Ali El Idrissi
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
