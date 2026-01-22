import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { tileVariants } from '../styles/FramerConsts.ts'

export default function ThemeToggleButton() {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as
            | 'light'
            | 'dark'
            | null
        if (storedTheme === 'light' || storedTheme === 'dark') {
            setTheme(storedTheme)
        } else {
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
            setTheme(prefersDark ? 'dark' : 'light')
        }
    }, [])

    useEffect(() => {
        if (!theme) return
        const root = document.documentElement

        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }

        localStorage.setItem('theme', theme)
    }, [theme])

    if (!theme) return null

    return (
        <motion.button
            initial="rest"
            whileHover="hover"
            variants={tileVariants}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-6 py-4 rounded-lg bg-tilescolor hover:bg-foreground hover:text-tilescolor text-backforeground transition duration-300 hover:cursor-pointer"
        >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </motion.button>
    )
}
