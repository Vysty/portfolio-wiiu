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
  const bubblePositionClass = pos === 'top' ? '-top-16' : '-bottom-16'

  const arrowPositionClass =
    pos === 'top'
      ? '-bottom-2 border-r-2 border-b-2 translate-y-[-2px]'
      : '-top-2 border-t-2 border-l-2 translate-y-[2px]'

  return (
    <motion.div
      variants={bubbleVariants}
      className={`absolute ${bubblePositionClass} w-max max-w-[180px] pointer-events-none`}
    >
      <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-xl border-2 border-gray-100 flex flex-col items-center">
        <span className="text-lg font-sans font-semibold whitespace-nowrap">{label}</span>
        {/* Le petit triangle (flèche) dynamique */}
        <div className={`absolute w-4 h-4 bg-white rotate-45 border-gray-100 transform ${arrowPositionClass}`}></div>
      </div>
    </motion.div>
  )
}
