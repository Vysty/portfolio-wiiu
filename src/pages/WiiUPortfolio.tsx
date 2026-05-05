import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AppTile from '../assets/AppTile.tsx'
import EmptyTile from '../assets/EmptyTile.tsx'
import ThemeToggleButton from '../assets/ThemeToggleButton.tsx'
import ProfileTile from '../assets/ProfileTile.tsx'
import FooterIcon from '../assets/FooterIcon.tsx'
import AboutMe from './footerIconContents/AboutMe.tsx'

// Constante pour définir le nombre de tuiles par page (grille 5x3)
const ITEMS_PER_PAGE = 15

// --- Splash Screen ---
function SplashScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash-screen"
          initial={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-100 bg-tilescolor flex flex-col items-center justify-center shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <img
              src={'/Photo.jpg'}
              alt={'Image de profile'}
              className="w-52 h-52 object-cover rounded-3xl border-12 border-tileselected bg-tileselected overflow-hidden"
            />
            <h1 className="text-5xl my-3 font-sans font-bold text-gray-400 tracking-widest drop-shadow-sm">
              Thomas MARIE--DUVAL
            </h1>
            <div className="mt-8 flex space-x-2">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                className="w-5 h-5 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                className="w-5 h-5 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                className="w-5 h-5 bg-cyan-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// --- Modal ---
function DynamicOverlay({
  activeContent,
  onClose,
  sizeClass = 'w-5/6 h-5/6',
}: {
  activeContent: React.ReactNode | null
  onClose: () => void
  sizeClass?: string
}) {
  return (
    <AnimatePresence>
      {activeContent && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center"
        >
          <div
            className={`bg-white text-black rounded-lg p-8 shadow-lg ${sizeClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flex items-center justify-center absolute top-4 right-4 p-2 text-white rounded-2xl bg-transparent hover:bg-red-500/60 transition duration-400 cursor-pointer"
              onClick={onClose}
            >
              <img
                src={'/icons/wiiu/cross.png'}
                alt={'Fermer'}
                className="w-full h-full object-cover overflow-hidden"
              />
            </button>
            {activeContent}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// --- Fonction principale ---
export default function WiiUPortfolio() {
  const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null)
  const [modalSizeClass, setModalSizeClass] = useState<string>('w-5/6 h-5/6')

  // Gestion de la page actuelle
  const [currentPage, setCurrentPage] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  // Gestion du thème
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  // Minuteur pour le chargement de la page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 0) // 2000 millisecondes = 2 secondes //TODO : rechanger pour 2000 après

    return () => clearTimeout(timer)
  }, [])

  // Initialisation du thème au chargement
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Appliquer le thème au DOM et sauvegarder en localStorage
  useEffect(() => {
    if (!theme) return
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const handleOpen = (content: React.ReactNode, sizeClass: string | null = null) => {
    setActiveContent(content)
    if (sizeClass == null) {
      setModalSizeClass('w-5/6 h-5/6')
    } else {
      setModalSizeClass(sizeClass)
    }
  }

  interface App {
    position: number
    label: string
    icon: string
    content: React.ReactNode
  }

  interface FooterIcon {
    label: string
    icon: string
    content?: React.ReactNode
    redirect?: string
    sizeClass?: string | null
  }

  // --- LISTE DES APPLICATIONS ---
  const APPS: App[] = [
    {
      position: 2,
      label: 'Mon CV',
      icon: '/PlaceHolderImage.jpg',
      content: <div>Contenu d'un projet</div>,
    },
    {
      position: 12,
      label: 'Projets',
      icon: '/PlaceHolderImage.jpg',
      content: <div>Contenu des projets</div>,
    },
    {
      position: 16,
      label: 'Contact',
      icon: '/PlaceHolderImage.jpg',
      content: <div>Formulaire de contact</div>,
    },
  ]

  const footerApps: FooterIcon[] = [
    {
      label: 'À propos de moi',
      icon: '/icons/wiiu/bubble.png',
      content: <AboutMe />,
    },
    {
      label: 'Linkedln',
      icon: '/icons/linkedln.png',
      redirect: 'https://linkedin.com/in/thomas-marie-duval',
    },
    {
      label: 'Github',
      icon: theme === 'dark' ? '/icons/github.png' : 'icons/github_dark.png',
      redirect: 'https://github.com/Vysty',
    },
    {
      label: 'Contact',
      icon: 'icons/wiiu/globe.png',
      content: <div>Contact Content tempo</div>,
      sizeClass: 'w-2/8 h-2/8',
    },
  ]

  // --- LOGIQUE DE PAGINATION ET DE GRILLE ---
  const highestPosition = APPS.length > 0 ? Math.max(...APPS.map((app) => app.position)) : 0
  const totalPages = Math.max(1, Math.ceil((highestPosition + 1) / ITEMS_PER_PAGE))

  // Gestion du scroll à la souris pour changer de page
  useEffect(() => {
    if (activeContent) return // Ne pas permettre le scroll si un modal est actif

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (e.deltaY > 0) {
        // Scroll vers le bas = page suivante
        setCurrentPage((curr) => (curr < totalPages - 1 ? curr + 1 : curr))
      } else if (e.deltaY < 0) {
        // Scroll vers le haut = page précédente
        setCurrentPage((curr) => (curr > 0 ? curr - 1 : curr))
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [activeContent, totalPages])

  const gridSlots = Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => {
    const absolutePosition = currentPage * ITEMS_PER_PAGE + index
    return APPS.find((app) => app.position === absolutePosition) || null
  })

  return (
    <div className={'flex h-screen w-screen overflow-hidden bg-background'}>
      <SplashScreen isLoading={isLoading} />

      {/* ---- Affichage de la page ---- */}
      <AnimatePresence>
        {/*Left side*/}
        <div className={'w-42 h-screen flex flex-col items-center justify-start p-4 relative'}>
          <ProfileTile />

          {/* Flèche Gauche */}
          {currentPage > 0 && (
            <button
              onClick={() => setCurrentPage((curr) => curr - 1)}
              className="absolute top-1/2 -translate-y-1/2 left-6 z-20 p-6 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-foreground backdrop-blur-md transition-all border-2 border-transparent hover:border-foreground/50 shadow-lg cursor-pointer"
              aria-label="Page précédente"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}
        </div>

        {/*Center*/}
        <div className={'grow h-screen flex flex-col relative'}>
          {/*Center Header - Indicateurs de pages*/}
          <header className="h-20 flex flex-col items-center justify-end pb-4 z-0">
            <div className="flex space-x-4 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Aller à la page ${index + 1}`}
                  className={`w-5 h-5 rounded-md transition-all duration-300 cursor-pointer shadow-sm
                  ${
                    currentPage === index
                      ? 'bg-tileselected scale-150 shadow-white/50 drop-shadow-md'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                />
              ))}
            </div>
          </header>

          {/* --- ZONE PRINCIPALE : Grille --- */}
          <div className="grow relative overflow-hidden flex items-center justify-center">
            {/* Grille animée */}
            <AnimatePresence mode="wait">
              <motion.main
                key={currentPage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-6 p-6 place-content-center justify-items-center"
              >
                {gridSlots.map((app, index) => {
                  if (app) {
                    return (
                      <AppTile
                        key={app.label}
                        label={app.label}
                        icon={app.icon}
                        content={app.content}
                        onOpen={() => {
                          handleOpen(app.content)
                        }}
                        bubblePos={index < 5 ? 'bottom' : 'top'}
                      />
                    )
                  } else {
                    return <EmptyTile key={`empty-${currentPage}-${index}`} />
                  }
                })}
              </motion.main>
            </AnimatePresence>
          </div>

          {/*Center Footer*/}
          <footer className="h-36 flex items-center justify-center gap-10 p-2 pb-4">
            {footerApps.map((app, index) => (
              <FooterIcon
                key={index}
                label={app.label}
                icon={app.icon}
                content={app.content}
                redirect={app.redirect}
                onOpen={() => {
                  handleOpen(app.content, app.sizeClass)
                }}
              />
            ))}
          </footer>
        </div>

        {/*Right side*/}
        <div className={'w-42 h-screen flex flex-col items-center justify-start p-4 relative'}>
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
          {/* Flèche Droite */}
          {currentPage < totalPages - 1 && (
            <button
              onClick={() => setCurrentPage((curr) => curr + 1)}
              className="absolute top-1/2 -translate-y-1/2 right-6 z-20 p-6 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-foreground backdrop-blur-md transition-all border-2 border-transparent hover:border-foreground/50 shadow-lg cursor-pointer"
              aria-label="Page suivante"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </AnimatePresence>

      {/* Overlay dynamique */}
      <DynamicOverlay activeContent={activeContent} onClose={() => setActiveContent(null)} sizeClass={modalSizeClass} />
    </div>
  )
}
