import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AppTile from '../assets/AppTile.tsx'
import EmptyTile from '../assets/EmptyTile.tsx'
import ThemeToggleButton from '../assets/ThemeToggleButton.tsx'
import ProfileTile from '../assets/ProfileTile.tsx'

// Constante pour définir le nombre de tuiles par page (grille 5x3)
const ITEMS_PER_PAGE = 15

export default function WiiUPortfolio() {
  const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null)

  // État pour gérer la page actuelle (commence à 0)
  const [currentPage, setCurrentPage] = useState(0)

  const handleOpen = (content: React.ReactNode) => {
    setActiveContent(content)
  }

  interface App {
    position: number
    label: string
    icon: string
    content: React.ReactNode
  }

  // --- LISTE DES APPLICATIONS ---
  const apps = [
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

  // --- LOGIQUE DE PAGINATION ET DE GRILLE ---
  const highestPosition = apps.length > 0 ? Math.max(...apps.map((app) => app.position)) : 0
  const totalPages = Math.max(1, Math.ceil((highestPosition + 1) / ITEMS_PER_PAGE))

  const gridSlots = Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => {
    const absolutePosition = currentPage * ITEMS_PER_PAGE + index
    return apps.find((app) => app.position === absolutePosition) || null
  })

  return (
    <div className={'flex h-screen w-screen overflow-hidden bg-background'}>
      {/*Left side*/}
      <div className={'w-42 h-screen flex flex-col items-center justify-start p-4 relative'}>
        <ProfileTile />

        {/* Flèche Gauche (cachée si on est sur la page 0) */}
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage((curr) => curr - 1)}
            // Ajout de top-1/2 et -translate-y-1/2 ici 👇
            className="absolute top-1/2 -translate-y-1/2 left-6 z-20 p-4 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-foreground backdrop-blur-md transition-all border-2 border-transparent hover:border-foreground/50 shadow-lg cursor-pointer"
            aria-label="Page précédente"
          >
            <svg
              width="36"
              height="36"
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
        {/*Center Header - Indicateurs de pages façon Wii U*/}
        <header className="h-36 flex flex-col items-center justify-end pb-4 bg-red-400">
          <div className="flex space-x-4 items-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Aller à la page ${index + 1}`}
                className={`w-5 h-5 rounded-md border-2 border-white transition-all duration-300 cursor-pointer shadow-sm
                  ${
                    currentPage === index
                      ? 'bg-white scale-110 shadow-white/50 drop-shadow-md'
                      : 'bg-transparent hover:bg-white/30'
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
                      onOpen={handleOpen}
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
        <footer className="h-36 flex items-center justify-center p-2 bg-gray-800 text-white">
          <p>© 2026</p>
        </footer>
      </div>

      {/*Right side*/}
      <div className={'w-42 h-screen flex flex-col items-center justify-start p-4 relative'}>
        <ThemeToggleButton />
        {/* Flèche Droite (cachée si on est sur la dernière page) */}
        {currentPage < totalPages - 1 && (
          <button
            onClick={() => setCurrentPage((curr) => curr + 1)}
            // Ajout de top-1/2 et -translate-y-1/2 ici 👇
            className="absolute top-1/2 -translate-y-1/2 right-6 z-20 p-4 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-foreground backdrop-blur-md transition-all border-2 border-transparent hover:border-foreground/50 shadow-lg cursor-pointer"
            aria-label="Page suivante"
          >
            <svg
              width="36"
              height="36"
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

      {/* Overlay dynamique */}
      <AnimatePresence>
        {activeContent && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center"
            onClick={() => setActiveContent(null)}
          >
            <div
              className="bg-white text-black rounded-lg p-8 shadow-lg max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {activeContent}
              <button
                className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                onClick={() => setActiveContent(null)}
              >
                Fermer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
