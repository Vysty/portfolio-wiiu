import { motion } from 'framer-motion'
import { tileVariants } from '../styles/FramerConsts.ts'
import Bubble from './Bubble.tsx'

//TODO : Améliorer le Composant ProfileTile pour les intégrations onclick etc
export default function ProfileTile({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <motion.a
      initial="rest"
      whileHover="hover"
      variants={tileVariants}
      href={'/ThomasMarieDuval_CV.pdf'}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        isMobile ? 'w-10 h-10 md:w-12 md:h-12' : 'w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32'
      } rounded-lg flex flex-col items-center justify-center text-center shadow-lg bg-tilescolor/80 cursor-pointer transition-colors duration-500`}
    >
      <img
        src={'/Photo.jpg'}
        alt={'Image de profile'}
        className="w-full h-full object-cover rounded-lg overflow-hidden "
      />
      {!isMobile && <Bubble pos={'bottom'} label={'Mon CV'} />}
    </motion.a>
  )
}
