import React, { useState } from 'react'
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

    const apps = [
        // Liste des applications affiché
        {
            label: 'Mon CV',
            icon: '/PlaceHolderImage.jpg',
            content: <div>Contenu d'un projet</div>,
        },
        {
            label: 'Projets',
            icon: '/PlaceHolderImage.jpg',
            content: <div>Contenu des projets</div>,
        },
        {
            label: 'Contact',
            icon: '/PlaceHolderImage.jpg',
            content: <div>Formulaire de contact</div>,
        },
    ]

    return (
        <div className={'flex h-screen w-screen'}>
            <div className={'w-42 h-screen'}>
                <p>Profile Picture placement</p>
            </div>
            {/*Left side*/}
            <div className={'grow h-screen flex flex-col'}>
                <header className="h-36 flex justify-center p-4 bg-red-400 ">
                    <p className={'text-center'}>
                        ....................................
                    </p>
                </header>
                {/* Grille d'apps */}
                <main
                    className="grow grid grid-cols-5 grid-rows-3 gap-6 p-6 overflow-x-auto"
                    style={{ width: '100%', height: '100%' }}
                >
                    {apps
                        .map((app) => (
                            <AppTile
                                key={app.label}
                                label={app.label}
                                icon={app.icon}
                                content={app.content}
                                onOpen={handleOpen}
                            />
                        ))
                        .concat(
                            Array.from({ length: 15 - apps.length }, (_, i) => (
                                <EmptyTile key={`empty-${i}`} />
                            )),
                        )}
                </main>
                <footer className="h-36 p-2 bg-gray-800">© 2025</footer>
            </div>{' '}
            {/*Center div*/}
            <div className={'w-42 h-screen p'}>
                <ThemeToggleButton />
            </div>
            {/*Right side*/}
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
