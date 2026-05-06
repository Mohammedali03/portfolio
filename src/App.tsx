import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { SmoothScroll } from './components/SmoothScroll'
import { CustomCursor } from './components/CustomCursor'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { ContactSection } from './components/ContactSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="min-h-screen w-full bg-slate-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors duration-300">
          <CustomCursor />
          
          {/* Loading Screen */}
          {isLoading && (
            <div className="fixed inset-0 z-[100] bg-white dark:bg-dark-bg flex items-center justify-center transition-opacity duration-500">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-primary-200 dark:border-dark-border border-t-primary-600 animate-spin" />
                <p className="text-sm font-medium text-gray-500 dark:text-dark-muted animate-pulse">Loading portfolio...</p>
              </div>
            </div>
          )}

          <Navigation />
          
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <ContactSection />
                  </>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  )
}

export default App
