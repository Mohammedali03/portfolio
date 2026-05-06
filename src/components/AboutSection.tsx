import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Brain, Layers, Globe } from 'lucide-react'

const aboutCards = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive, modern websites using HTML, CSS, JavaScript and modern frameworks.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Studying and applying AI/ML techniques to solve real-world problems.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Layers,
    title: 'Full-Stack',
    description: 'Creating complete applications from front-end interfaces to back-end APIs.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: Globe,
    title: 'Open Source',
    description: 'Actively contributing to various projects on GitHub and the developer community.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-400',
  },
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-dark-muted text-lg leading-relaxed">
            Hello! I'm a dedicated web developer with a passion for creating exceptional user experiences.
            Currently, I'm pursuing studies in Artificial Intelligence at FSBM Ben Msick, combining
            my love for full-stack development with cutting-edge AI technologies.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Main description card - spans 2 cols on lg */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1 card-glass transition-colors"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Story</h3>
                <p className="text-gray-600 dark:text-dark-muted leading-relaxed mb-6">
                  I believe in writing clean, maintainable code and staying updated with the latest
                  technologies in both web development and AI. When I'm not coding, you can find me
                  learning new frameworks or contributing to open-source projects.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                  <div className="text-xs text-gray-500 dark:text-dark-muted">Years Coding</div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-dark-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4+</div>
                  <div className="text-xs text-gray-500 dark:text-dark-muted">Projects</div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:border-dark-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">∞</div>
                  <div className="text-xs text-gray-500 dark:text-dark-muted">Curiosity</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature cards */}
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-glass group cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-xl ${card.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-muted text-sm leading-relaxed">
                {card.description}
              </p>
              <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${card.color} w-0 group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
