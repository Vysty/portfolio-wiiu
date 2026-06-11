import { Route, Routes } from 'react-router-dom'
import CommingSoonPage from './pages/CommingSoonPage.tsx'
import NotFound from './pages/NotFound.tsx'
import WiiUPortfolio from './pages/WiiUPortfolio.tsx'

// Point d'entrée du routage de l'application
function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<WiiUPortfolio />} />
        <Route path={'/comingsoon'} element={<CommingSoonPage />} />
        <Route path={'/coming-soon'} element={<CommingSoonPage />} />
        <Route path="/404" element={<NotFound />} />
        {/* Fallback global pour toutes les URLs inconnues */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
