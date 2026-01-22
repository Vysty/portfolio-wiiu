import { motion } from 'framer-motion'
import { tileVariants } from '../styles/FramerConsts.ts'

//TODO : Améliorer le Composant ProfileTile pour les intégrations onclick etc
export default function ProfileTile() {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            variants={tileVariants}
            className="w-32 h-32 rounded-lg flex flex-col items-center justify-center text-center shadow-lg bg-tilescolor/80 cursor-pointer"
        >
            <img
                src={'/PlaceHolderImage.jpg'}
                alt={'Image de profile'}
                className="w-full h-full object-cover rounded-lg overflow-hidden " // rounded-md ajouté pour adoucir l'image
            />
        </motion.div>
    )
}
