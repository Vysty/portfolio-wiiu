import { motion } from 'framer-motion'
import { tileVariants } from '../styles/FramerConsts.ts'
import Bubble from './Bubble.tsx'

//TODO : Améliorer le Composant ProfileTile pour les intégrations onclick etc
export default function ProfileTile() {
  return (
    <motion.a
      initial="rest"
      whileHover="hover"
      variants={tileVariants}
      href={'/ThomasMarieDuval_CV.pdf'}
      target="_blank"
      rel="noopener noreferrer"
      className="w-32 h-32 rounded-lg flex flex-col items-center justify-center text-center shadow-lg bg-tilescolor/80 cursor-pointer"
    >
      <img
        src={'/Photo.jpg'}
        alt={'Image de profile'}
        className="w-full h-full object-cover rounded-lg overflow-hidden "
      />
      <Bubble pos={'bottom'} label={'Mon CV'} />{' '}
      {/* TODO : A l'avenir faire une page avec une présentation et accès au CV après.*/}
    </motion.a>
  )
}
