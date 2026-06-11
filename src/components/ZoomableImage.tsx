import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ZoomableImageProps {
  src: string
  alt: string
  className?: string
}

export default function ZoomableImage({ src, alt, className = '' }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Conteneur de l'image miniature */}
      <div
        className={`relative group cursor-zoom-in overflow-hidden rounded-lg ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />

        {/* Overlay au survol (Desktop) */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white border border-white/30 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </div>
        </div>
      </div>

      {/* Vue plein écran (Portal-like via z-index élevé) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm border border-white/10"
              />
              
              {/* Bouton de fermeture plein écran */}
              <button
                className="absolute -top-12 right-0 md:-right-12 md:top-0 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le plein écran"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Légende discrète */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium tracking-widest uppercase">
                {alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
