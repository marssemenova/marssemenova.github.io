import Canvas from "./components/Canvas"
import SideBar from "./components/SideBar";
import Home from './pages/Home';
import Knowledge from "./pages/Knowledge";
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import './index.css';

function App() {
    return(
        <div className="main">
            <Canvas/>
            <SideBar/>
            <Home/>
            <Knowledge/>
            <Experience/>
            <Achievements/>
            <Projects/>
        </div>
    )
}

export default App;