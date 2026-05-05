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
      className={`relative w-44 h-44 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-md border-12 border-tilescolor/80 bg-tilescolor/80 hover:border-tileselected hover:bg-tileselected`}
    >
      <Bubble pos={bubblePos} label={label} />

      <img
        src={icon}
        alt={'Image de ' + label}
        className="w-full h-full object-cover rounded-lg overflow-hidden " // rounded-md ajouté pour adoucir l'image
      />
    </motion.div>
  )
}
