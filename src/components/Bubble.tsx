import { motion, Variants } from 'framer-motion'

// Définition des Variants pour la bulle de texte si on l'affiche ou pas
const bubbleVariants: Variants = {
  rest: { opacity: 0, y: 10, scale: 0.8, display: 'none' },
  hover: {
    opacity: 1,
    y: -10,
    scale: 1,
    display: 'block',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default function Bubble({ pos, label }: { pos: 'top' | 'bottom'; label: string }) {
  // Ajuste la position de la bulle et de son triangle directionnel en fonction de 'pos'
  const bubblePositionClass = pos === 'top' ? 'bottom-full mb-6 md:mb-10' : 'top-full mt-6 md:mt-10'
  const arrowPositionClass = pos === 'top' ? '-bottom-2 translate-y-[-2px]' : '-top-2 translate-y-[2px]'

  return (
    <motion.div
      variants={bubbleVariants}
      className={`absolute ${bubblePositionClass} left-1/2 -translate-x-1/2 w-max max-w-[150px] md:max-w-72 pointer-events-none z-50`}
    >
      <div className="bg-tilescolor text-foreground px-2 py-1 md:px-4 md:py-2 rounded-xl md:rounded-2xl shadow-xl flex flex-col items-center relative transition-colors duration-500">
        <span className="text-xs md:text-base lg:text-lg font-sans font-semibold text-center break-words">{label}</span>
        {/* Le petit triangle (flèche) dynamique */}
        <div
          className={`absolute w-3 h-3 md:w-4 md:h-4 bg-tilescolor rotate-45 transform ${arrowPositionClass} left-1/2 -translate-x-1/2 transition-colors duration-500`}
        ></div>
      </div>
    </motion.div>
  )
}
