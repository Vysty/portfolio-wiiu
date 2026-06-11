import { tileVariants } from '../styles/FramerConsts.ts'
import Bubble from './Bubble.tsx'
import { motion } from 'framer-motion'
import React from 'react'

// Représente une icône de raccourci dans la barre du bas (ex: LinkedIn, Contact)
// Gère à la fois l'ouverture d'une modale interne ou la redirection vers un lien externe
export default function FooterIcon({
  label,
  icon,
  content = null,
  redirect = null,
  onOpen = () => {},
}: {
  label: string
  icon: string
  content?: React.ReactNode
  redirect?: string | null
  onOpen?: (content: React.ReactNode) => void
}) {
  const handleClick = () => {
    // Si on a un lien, on part. Sinon on ouvre la modale associée au composant.
    if (redirect) {
      window.open(redirect, '_blank')
    } else if (content) {
      onOpen(content)
    }
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={tileVariants}
      onClick={handleClick}
      className={`relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center cursor-pointer`}
    >
      <Bubble pos={'top'} label={label} />

      <img src={icon} alt={'Image de ' + label} className="w-full h-full object-contain overflow-hidden " />
    </motion.div>
  )
}
