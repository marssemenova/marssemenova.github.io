import React from 'react';
import Canvas from "./components/Canvas"
import SideBar from "./components/SideBar";
import Profile from './pages/Profile';
import Knowledge from "./pages/Knowledge";
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import MobileSideBar from "./components/MobileSideBar";
import { useMediaQuery } from "react-responsive";
import { maxSize } from "./assets";

function App() {
    const isMobile = useMediaQuery({ maxWidth: maxSize });

    return(
        <div className="main">
            <Canvas/>
            {!isMobile && <SideBar mobile={false} />}
            {isMobile && <MobileSideBar />}
            <Profile/>
            <Knowledge/>
            <Experience/>
            <Achievements/>
            <Projects/>
        </div>
    )
}

export default App;