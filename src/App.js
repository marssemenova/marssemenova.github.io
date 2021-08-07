import React from 'react';
import Canvas from "./components/Canvas"
import SideBar from "./components/SideBar";
import Profile from './pages/Profile';
import Knowledge from "./pages/Knowledge";
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';

function App() {
    return(
        <div className="main">
            <Canvas/>
            <SideBar/>
            <Profile/>
            <Knowledge/>
            <Experience/>
            <Achievements/>
            <Projects/>
        </div>
    )
}

export default App;