import { motion } from 'framer-motion'
import { tileVariants } from '../styles/FramerConsts.ts'

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)

interface ThemeToggleButtonProps {
  theme: 'light' | 'dark' | null
  setTheme: (theme: 'light' | 'dark') => void
}

export default function ThemeToggleButton({ theme, setTheme }: ThemeToggleButtonProps) {
  if (!theme) return null

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      variants={tileVariants}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
      className="p-4 rounded-2xl flex items-center justify-center cursor-pointer shadow-md transition-colors duration-500 text-foreground bg-background hover:bg-foreground hover:text-background  border-12 border-tilescolor/80 hover:border-tileselected"
    >
      {/* Si on est en Dark, on montre le soleil pour passer en Light. Sinon, la lune. */}
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </motion.button>
  )
}
