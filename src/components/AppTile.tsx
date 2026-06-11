import { motion } from 'framer-motion'
import React from 'react'
import { tileVariants } from '../styles/FramerConsts.ts'
import Bubble from './Bubble.tsx'

export type AppTileProps = {
  label: string
  icon: string
  content: React.ReactNode
  onOpen: (content: React.ReactNode) => void
  bubblePos: 'top' | 'bottom'
}

// Tuile principale de la grille (l'équivalent des "chaînes" sur la Wii U)
// Un clic dessus ouvre le contenu associé dans la modale principale
export default function AppTile({ label, icon, content, onOpen, bubblePos }: AppTileProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={tileVariants}
      onClick={() => onOpen(content)}
      // 'relative' est important ici pour que la bulle (Bubble) puisse se positionner correctement par rapport à la tuile
      className={`relative w-28 h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-44 2xl:h-44 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-md border-6 md:border-8 2xl:border-12 border-tilescolor/80 bg-tilescolor/40 backdrop-blur-sm hover:border-tileselected hover:bg-tileselected/20 hover:shadow-[0_0_20px_rgba(65,198,219,0.5)] transition-all duration-300`}
    >
      <Bubble pos={bubblePos} label={label} />

      <img src={icon} alt={'Image de ' + label} className="w-full h-full object-cover rounded-lg overflow-hidden " />
    </motion.div>
  )
}
