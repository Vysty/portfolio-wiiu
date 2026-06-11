import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AppTile from '../components/AppTile.tsx'
import EmptyTile from '../components/EmptyTile.tsx'
import ThemeToggleButton from '../components/ThemeToggleButton.tsx'
import ProfileTile from '../components/ProfileTile.tsx'
import FooterIcon from '../components/FooterIcon.tsx'
import AboutMe from './footerIconContents/AboutMe.tsx'
import Contact from './footerIconContents/Contact.tsx'
import RustGarden from './modalsContents/RustGarden.tsx'
import Palette from './modalsContents/Palette.tsx'

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
          className="fixed inset-0 z-[100] bg-tilescolor flex flex-col items-center justify-center shadow-2xl transition-colors duration-500 p-4"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={'/Photo.jpg'}
              alt={'Image de profile'}
              className="w-32 h-32 md:w-52 md:h-52 object-cover rounded-3xl border-8 md:border-12 border-tileselected bg-tileselected overflow-hidden"
            />
            <h1 className="text-3xl md:text-5xl my-3 font-sans font-bold text-gray-400 tracking-widest drop-shadow-sm">
              Thomas MARIE--DUVAL
            </h1>
            <div className="mt-8 flex space-x-2">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                className="w-3 h-3 md:w-5 md:h-5 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                className="w-3 h-3 md:w-5 md:h-5 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                className="w-3 h-3 md:w-5 md:h-5 bg-cyan-400 rounded-full"
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
  sizeClass = 'w-11/12 md:w-5/6 h-5/6',
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div
            className={`bg-background text-foreground rounded-lg p-4 md:p-8 shadow-lg relative max-h-[90vh] overflow-auto ${sizeClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="flex items-center justify-center absolute top-2 right-2 p-2 w-10 h-10 text-white rounded-2xl bg-black/10 hover:bg-red-500/60 transition duration-400 cursor-pointer z-50"
              onClick={onClose}
            >
              <img src={'/icons/wiiu/cross.png'} alt={'Fermer'} className="w-6 h-6 object-contain" />
            </button>
            <div className="h-full w-full pt-4 md:pt-0">{activeContent}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// --- Fonction principale ---
export default function WiiUPortfolio() {
  const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null)
  const [modalSizeClass, setModalSizeClass] = useState<string>('w-11/12 md:w-5/6 h-5/6')

  // Gestion de la page actuelle
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Gestion du nombre d'items par page en fonction de la taille de l'écran
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 640) return 6
      if (width < 1024) return 9
      if (width < 1400) return 12
    }
    return 15
  })
  const [gridCols, setGridCols] = useState(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 640) return 2
      if (width < 1024) return 3
      if (width < 1400) return 4
    }
    return 5
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setItemsPerPage(6)
        setGridCols(2)
      } else if (width < 1024) {
        setItemsPerPage(9)
        setGridCols(3)
      } else if (width < 1400) {
        setItemsPerPage(12)
        setGridCols(4)
      } else {
        setItemsPerPage(15)
        setGridCols(5)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Gestion du thème
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  // Minuteur pour le chargement de la page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
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
      setModalSizeClass('w-11/12 md:w-5/6 h-5/6')
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
      position: 1,
      label: 'Projet RustGarden',
      icon: '/icons/modalIcon/RustGarden.png',
      content: <RustGarden />,
    },
    {
      position: 13,
      label: "Logiciel industriel d'assistance à la  préparation en entrepôt",
      icon: '/icons/modalIcon/Palette.png',
      content: <Palette />,
    },
    {
      position: 19,
      label: 'Placeholder',
      icon: '/PlaceHolderImage.jpg',
      content: <div>Placeholder</div>,
    },
  ]

  const footerApps: FooterIcon[] = [
    {
      label: 'À propos de moi',
      icon: '/icons/wiiu/bubble.png',
      content: <AboutMe />,
    },
    {
      label: 'LinkedIn',
      icon: '/icons/linkedIn.png',
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
      content: <Contact />,
      sizeClass: 'w-11/12 md:w-2/8 h-fit',
    },
  ]

  // --- LOGIQUE DE PAGINATION ET DE GRILLE ---
  const highestPosition = APPS.length > 0 ? Math.max(...APPS.map((app) => app.position)) : 0
  const totalPages = Math.max(1, Math.ceil((highestPosition + 1) / itemsPerPage))

  // S'assurer que la page actuelle ne dépasse pas totalPages après un redimensionnement
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1))
    }
  }, [totalPages, currentPage])

  // Gestion du scroll à la souris pour changer de page
  useEffect(() => {
    if (activeContent) return

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return // Ignorer les petits scrolls

      if (e.deltaY > 0) {
        setCurrentPage((curr) => (curr < totalPages - 1 ? curr + 1 : curr))
      } else if (e.deltaY < 0) {
        setCurrentPage((curr) => (curr > 0 ? curr - 1 : curr))
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [activeContent, totalPages])

  // Gestion du swipe sur mobile
  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold) {
      setCurrentPage((curr) => (curr < totalPages - 1 ? curr + 1 : curr))
    } else if (info.offset.x > swipeThreshold) {
      setCurrentPage((curr) => (curr > 0 ? curr - 1 : curr))
    }
  }

  const gridSlots = Array.from({ length: itemsPerPage }).map((_, index) => {
    const absolutePosition = currentPage * itemsPerPage + index
    return APPS.find((app) => app.position === absolutePosition) || null
  })

  return (
    <div className={'flex flex-col lg:flex-row h-screen w-screen overflow-hidden bg-background transition-colors duration-500'}>
      <SplashScreen isLoading={isLoading} />

      {/* ---- Navigation Mobile (Haut) ---- */}
      <div className="lg:hidden flex items-center justify-between px-6 py-5 z-30 bg-background/80 backdrop-blur-md border-b border-foreground/5 shadow-sm">
        <div className="flex items-center gap-4">
          <ProfileTile isMobile />
          <span className="text-sm md:text-base font-bold text-foreground/70 uppercase tracking-widest truncate">Thomas Marie--Duval</span>
        </div>
        <ThemeToggleButton theme={theme} setTheme={setTheme} isMobile />
      </div>

      <div className="flex grow overflow-hidden relative">
        {/*Left side (Desktop)*/}
        <div className={'hidden lg:flex w-32 xl:w-42 h-screen flex-col items-center justify-start p-4 relative'}>
          <ProfileTile />

          {/* Flèche Gauche */}
          {currentPage > 0 && (
            <button
              onClick={() => setCurrentPage((curr) => curr - 1)}
              className="absolute top-1/2 -translate-y-1/2 left-6 z-20 p-6 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-foreground backdrop-blur-md transition-all border-2 border-transparent hover:border-foreground/50 shadow-lg cursor-pointer"
              aria-label="Page précédente"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}
        </div>

        {/*Center*/}
        <div className={'grow flex flex-col relative overflow-hidden'}>
          {/*Center Header - Indicateurs de pages*/}
          <header className="h-10 md:h-12 lg:h-14 flex flex-col items-center justify-end pb-2 md:pb-3 z-10">
            <div className="flex space-x-3 md:space-x-4 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Aller à la page ${index + 1}`}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-md transition-all duration-500 cursor-pointer shadow-sm
                  ${
                    currentPage === index
                      ? 'bg-tileselected scale-125 md:scale-150 shadow-tileselected/50 drop-shadow-md'
                      : 'bg-gray-300  hover:bg-gray-400'
                  }
                `}
                />
              ))}
            </div>
          </header>

          {/* --- ZONE PRINCIPALE : Grille --- */}
          <motion.div
            className="grow relative overflow-hidden flex items-center justify-center touch-none"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {/* Flèches Mobile Overlay (mobile / tablet) */}
            <div className="lg:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-1 z-20 pointer-events-none opacity-50">
                {currentPage > 0 && (
                    <button
                        onClick={() => setCurrentPage((curr) => curr - 1)}
                        className="p-2 rounded-full bg-gray-500/10 text-foreground backdrop-blur-xs pointer-events-auto cursor-pointer"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                )}
                <div />
                {currentPage < totalPages - 1 && (
                    <button
                        onClick={() => setCurrentPage((curr) => curr + 1)}
                        className="p-2 rounded-full bg-gray-500/10 text-foreground backdrop-blur-xs pointer-events-auto cursor-pointer"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Grille animée */}
            <AnimatePresence mode="wait">
              <motion.main
                key={`${currentPage}-${itemsPerPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                style={{
                    gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${Math.ceil(itemsPerPage / gridCols)}, min-content)`
                }}
                className="absolute inset-0 grid gap-3 md:gap-4 lg:gap-6 xl:gap-8 p-4 md:p-6 xl:p-8 place-content-center justify-items-center"
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
                        bubblePos={index < gridCols ? 'bottom' : 'top'}
                      />
                    )
                  } else {
                    return <EmptyTile key={`empty-${currentPage}-${index}`} />
                  }
                })}
              </motion.main>
            </AnimatePresence>
          </motion.div>

          {/*Center Footer*/}
          <footer className="h-24 md:h-28 lg:h-32 flex items-center justify-center gap-8 md:gap-10 p-2 pb-4 md:pb-6">
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

        {/*Right side (Desktop)*/}
        <div className={'hidden lg:flex w-32 xl:w-42 h-screen flex-col items-center justify-start p-4 relative'}>
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
          {/* Flèche Droite */}
          {currentPage < totalPages - 1 && (
            <button
              onClick={() => setCurrentPage((curr) => curr + 1)}
              className="absolute top-1/2 -translate-y-1/2 right-6 z-20 p-6 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-foreground backdrop-blur-md transition-all border-2 border-transparent hover:border-foreground/50 shadow-lg cursor-pointer"
              aria-label="Page suivante"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Overlay dynamique */}
      <DynamicOverlay activeContent={activeContent} onClose={() => setActiveContent(null)} sizeClass={modalSizeClass} />
    </div>
  )
}
