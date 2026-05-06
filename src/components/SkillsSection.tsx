import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Globe,
  Server,
  Wrench,
  Brain,
} from 'lucide-react'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  icon: React.ElementType
  title: string
  color: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: Globe,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Tailwind', level: 90 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'React', level: 80 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'PHP', level: 70 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Deep Learning', level: 70 },
      { name: 'TensorFlow', level: 65 },
      { name: 'OpenCV', level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 75 },
      { name: 'Docker', level: 60 },
    ],
  },
]

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-dark-text">
          {skill.name}
        </span>
        <span className="text-xs text-gray-500 dark:text-dark-muted">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const activeSkills = skillCategories[activeCategory]

  return (
    <section id="skills" className="py-24 sm:py-32 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-dark-muted text-lg">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left sidebar - Categories */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-3"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              const isActive = index === activeCategory

              return (
                <motion.button
                  key={category.title}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white dark:bg-dark-card border-primary-500 shadow-lg shadow-primary-500/10'
                      : 'bg-white/50 dark:bg-dark-card/50 border-gray-200 dark:border-dark-border hover:border-primary-500/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${category.color} text-white`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-900 dark:text-dark-text'}`}>
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-dark-muted">
                        {category.skills.length} skills
                      </p>
                    </div>
                    <div className="ml-auto">
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                      )}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Right side - Skills display */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="card-glass">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${activeSkills.color} text-white`}
                >
                  <activeSkills.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {activeSkills.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-dark-muted">
                    {activeSkills.skills.length} technologies
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                {activeSkills.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
