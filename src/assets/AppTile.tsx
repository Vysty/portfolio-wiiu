import { motion } from 'framer-motion'
import React from 'react'
import { tileVariants } from '../styles/FramerConsts.ts'

export type AppTileProps = {
    label: string
    icon: string
    content: React.ReactNode
    onOpen: (content: React.ReactNode) => void
}

// Définition des Variants pour la bulle de texte si on l'affiche ou pas
const bubbleVariants = {
    rest: { opacity: 0, y: 10, scale: 0.8, display: 'none' },
    hover: {
        opacity: 1,
        y: -10, // La bulle monte légèrement
        scale: 1,
        display: 'block',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
}

export default function AppTile({
    label,
    icon,
    content,
    onOpen,
}: AppTileProps) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            variants={tileVariants}
            onClick={() => onOpen(content)}
            // relative pour ne pas couper la bulle de texte
            className={`relative w-40 h-40 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-md border-12 border-tilescolor/80 bg-tilescolor/80 hover:border-tileselected hover:bg-tileselected`}
        >
            {/* --- Bulle de texte variants hover --- */}
            {/*Possiblement remettre sur la bulle : "left-1/2 -translate-x-1/2" ???*/}
            <motion.div
                variants={bubbleVariants}
                className="absolute -top-16 w-max max-w-[180px] pointer-events-none"
            >
                <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-xl border-2 border-gray-100 flex flex-col items-center">
                    <span className="text-lg font-sans font-semibold whitespace-nowrap">
                        {label}
                    </span>
                    {/* Le petit triangle (flèche) en bas de la bulle */}
                    <div className="absolute -bottom-2 w-4 h-4 bg-white rotate-45 border-r-2 border-b-2 border-gray-100 translate-y-[-2px]"></div>
                </div>
            </motion.div>
            {/* --- FIN DE LA BULLE--- */}

            <img
                src={icon}
                alt={'Image de ' + label}
                className="w-full h-full object-cover rounded-lg overflow-hidden " // rounded-md ajouté pour adoucir l'image
            />

            {/* Optionnel : sur Wii U, le texte est souvent DANS la bulle et pas sous l'icône.
                Vous pouvez commenter cette ligne si vous voulez le style puriste. */}
            {/*
            <span className="text-sm font-medium text-white shadow-black drop-shadow-md">
                {label}
            </span>
            */}
        </motion.div>
    )
}
