import { motion, Variants } from 'framer-motion'

// Définition des Variants pour la bulle de texte si on l'affiche ou pas
const bubbleVariants: Variants = {
  rest: { opacity: 0, y: 10, scale: 0.8, display: 'none' },
  hover: {
    opacity: 1,
    y: -10, // La bulle monte légèrement
    scale: 1,
    display: 'block',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default function Bubble({ pos, label }: { pos: 'top' | 'bottom'; label: string }) {
  const bubblePositionClass = pos === 'top' ? 'bottom-full mb-10' : 'top-full mt-10'

  const arrowPositionClass = pos === 'top' ? '-bottom-2 translate-y-[-2px]' : '-top-2 translate-y-[2px]'

  return (
    <motion.div
      variants={bubbleVariants}
      className={`absolute ${bubblePositionClass} left-1/2 -translate-x-1/2 w-max max-w-72 pointer-events-none z-50`}
    >
      <div className="bg-tilescolor text-foreground px-4 py-2 rounded-2xl shadow-xl flex flex-col items-center relative transition-colors duration-500">
        <span className="text-lg font-sans font-semibold text-center break-words">{label}</span>
        {/* Le petit triangle (flèche) dynamique */}
        <div
          className={`absolute w-4 h-4 bg-tilescolor rotate-45 transform ${arrowPositionClass} left-1/2 -translate-x-1/2 transition-colors duration-500`}
        ></div>
      </div>
    </motion.div>
  )
}
