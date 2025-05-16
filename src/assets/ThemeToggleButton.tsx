import { useEffect, useState } from 'react'

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
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-4 py-2 rounded bg-foreground text-background transition duration-300"
        >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    )
}
