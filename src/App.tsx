import {Route, Routes} from "react-router-dom";
import CommingSoonPage from "./pages/CommingSoonPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<CommingSoonPage/>}/> {/*Redirection temporaire*/}
                <Route path={"/comingsoon"} element={<CommingSoonPage/>}/>
                <Route path={"/coming-soon"} element={<CommingSoonPage/>}/>
                <Route path={"/secret"} element={<HomePage/>}/>
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} /> {/* ← catch-all */}
            </Routes>
        </>
)
}

export default App
