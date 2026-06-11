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

export default function AppTile({ label, icon, content, onOpen, bubblePos }: AppTileProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={tileVariants}
      onClick={() => onOpen(content)}
      // relative pour ne pas couper la bulle de texte
      className={`relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-md border-6 md:border-8 lg:border-10 xl:border-12 border-tilescolor/80 bg-tilescolor/40 backdrop-blur-sm hover:border-tileselected hover:bg-tileselected/20 hover:shadow-[0_0_20px_rgba(65,198,219,0.5)] transition-all duration-300`}
    >
      <Bubble pos={bubblePos} label={label} />

      <img
        src={icon}
        alt={'Image de ' + label}
        className="w-full h-full object-cover rounded-lg overflow-hidden "
      />
    </motion.div>
  )
}
