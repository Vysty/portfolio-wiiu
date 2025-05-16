import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AppTile from '../assets/AppTile.tsx'
import EmptyTile from '../assets/EmptyTile.tsx'
import ThemeToggleButton from '../assets/ThemeToggleButton.tsx'

export default function WiiUPortfolio() {
    const [activeContent, setActiveContent] = useState<React.ReactNode | null>(
        null,
    )

    const handleOpen = (content: React.ReactNode) => {
        setActiveContent(content)
    }

    return (
        <div className="relative flex flex-col h-screen">
            {/* Barre du haut */}
            <header className="flex justify-between p-4 bg-red-400 ">
                <p>Profile Picture</p>
                <p className={'text-center'}>
                    ....................................
                </p>
                <ThemeToggleButton />
            </header>

            {/* Grille d'apps */}
            <main className="flex-grow overflow-x-auto p-6 flex space-x-6">
                <AppTile
                    label="Mon CV"
                    icon="/PlaceHolderImage.jpg"
                    content={<div>Contenu d'un projet</div>}
                    onOpen={handleOpen}
                />
                <AppTile
                    label="Projets"
                    icon="/PlaceHolderImage.jpg"
                    content={<div>Contenu des projets</div>}
                    onOpen={handleOpen}
                />
                <AppTile
                    label="Contact"
                    icon="/PlaceHolderImage.jpg"
                    content={<div>Formulaire de contact</div>}
                    onOpen={handleOpen}
                />
                <EmptyTile />
            </main>

            {/* Barre du bas */}
            <footer className="p-4 bg-gray-800">© 2025</footer>

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
                            className="bg-white text-black rounded-lg p-8 shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {activeContent}
                            <button
                                className="mt-6 px-4 py-2 bg-gray-800 text-white rounded"
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
