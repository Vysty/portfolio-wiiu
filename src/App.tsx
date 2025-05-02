import {Route, Routes} from "react-router-dom";
import CommingSoonPage from "./pages/CommingSoonPage.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<CommingSoonPage/>}/> {/*Redirection temporaire*/}
                <Route path={"/comingsoon"} element={<CommingSoonPage/>}/>
            </Routes>
        </>
)
}

export default App
