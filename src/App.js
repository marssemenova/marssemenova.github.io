import Canvas from "./components/Canvas"
import SideBar from "./components/SideBar";
import Home from './pages/Home';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';

function App() {
    return(
        <div>
            <Canvas/>
            <div>
                <div>
                    <SideBar/>
                </div>
                <div>
                    <Home/>
                    <Experience/>
                    <Achievements/>
                    <Projects/>
                </div>
            </div>
        </div>
    )
}

export default App;