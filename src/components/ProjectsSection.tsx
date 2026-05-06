import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Star, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'planify',
    name: 'Planify',
    description:
      'JavaScript-driven planning application. A tool designed to help users organize tasks, manage projects, and improve productivity with an intuitive interface.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Mohammedali03/Planify',
    featured: true,
    color: 'from-yellow-400 to-orange-500',
    icon: '⭐',
  },
  {
    id: 'ecommerce',
    name: 'EcommerceProject',
    description:
      'Full-featured e-commerce platform built with modern JavaScript. Includes product listings, shopping cart functionality, and order management.',
    tech: ['JavaScript', 'Node.js', 'Express'],
    link: 'https://github.com/Mohammedali03/EcommerceProject',
    featured: true,
    color: 'from-blue-400 to-indigo-500',
    icon: '🛍️',
  },
  {
    id: 'momentum',
    name: 'Momentum',
    description:
      'PHP-based application showcasing backend development skills. Built to demonstrate server-side programming and database integration concepts.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    link: 'https://github.com/Mohammedali03/Momentum',
    featured: false,
    color: 'from-purple-400 to-pink-500',
    icon: '⚡',
  },
  {
    id: 'ai-classification',
    name: 'AI Satellite Classification',
    description:
      'Machine learning project using Python to classify agricultural crop patterns from satellite imagery. Demonstrates practical AI application in agriculture.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    link: 'https://github.com/Mohammedali03/Classification-des-cultures-agricoles-partir-d-images-satellites',
    featured: true,
    color: 'from-green-400 to-emerald-500',
    icon: '🤖',
  },
]

const techColors: Record<string, string> = {
  JavaScript: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
  HTML: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
  CSS: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
  'Node.js': 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
  Express: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800',
  PHP: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800',
  MySQL: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
  Python: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800',
  TensorFlow: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
  OpenCV: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
}

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-dark-muted text-lg">
            A selection of my recent work, showcasing my skills in web development and AI.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="block group relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {project.name}
                        </h3>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-bg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-dark-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${[
                          techColors[tech] || 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700',
                        ]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Mohammedali03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            View more projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
