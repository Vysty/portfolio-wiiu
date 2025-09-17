import { motion } from 'framer-motion'
import React from 'react'

export type AppTileProps = {
    label: string
    icon: string
    content: React.ReactNode
    onOpen: (content: React.ReactNode) => void
    backgroundColor?: string
}

export default function AppTile({
    label,
    icon,
    content,
    onOpen,
    backgroundColor,
}: AppTileProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => onOpen(content)}
            className={`w-32 h-32 rounded-lg flex flex-col items-center justify-center cursor-pointer text-center shadow-md ${backgroundColor ? `bg-${backgroundColor}-700 hover:bg-${backgroundColor}-600` : 'bg-gray-700 hover:bg-gray-600'}`}
        >
            <img
                src={icon}
                alt={'Image de ' + label}
                className="w-20 h-20 mb-2 object-cover"
            />
            <span className="text-sm font-medium">{label}</span>
        </motion.div>
    )
}
