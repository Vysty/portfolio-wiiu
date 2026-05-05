import { tileVariants } from '../styles/FramerConsts.ts'
import Bubble from './Bubble.tsx'
import { motion } from 'framer-motion'
import React from 'react'

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
      className={`relative w-28 h-28 flex flex-col items-center justify-center cursor-pointer`}
    >
      <Bubble pos={'top'} label={label} />

      <img src={icon} alt={'Image de ' + label} className="w-full h-full object-contain overflow-hidden " />
    </motion.div>
  )
}
