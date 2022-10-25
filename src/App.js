import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import {Routes, Route, Link, HashRouter,} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TabPage from "./pages/TabPage";
import {TAB_DATA} from "./data/data";
import './App.css';


function App() {
    return (
        <>
            <HashRouter>
                <nav className={"navMenu"}>
                    <Link className={"navItem"} to="/">Home</Link>
                    <Link className={"navItem"} to="tabs">Tabs</Link>
                    <div className="dot"/>
                </nav>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="tabs" element={<TabPage tabs={TAB_DATA}/>}/>
                </Routes>
            </HashRouter>
        </>

    );
}

export default App;
