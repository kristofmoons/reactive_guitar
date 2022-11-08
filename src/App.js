import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import {Routes, Route, Link, HashRouter,} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TabPage from "./pages/TabPage";
import FormPage from "./pages/FormPage";
import {TAB_DATA} from "./data/data";
import './App.css';
import GuitarPage from "./pages/GuitarPage";


function App() {
    return (
        <>
            <HashRouter>
                <nav className={"navMenu"}>
                    <Link className={"navItem"} to="/">Home</Link>
                    <Link className={"navItem"} to="tabs">Tabs</Link>
                    <Link className={"navItem"} to="guitars">Guitars</Link>
                    <Link className={"navItem"} to="form">Contact</Link>
                    <div className="dot"/>
                </nav>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="tabs" element={<TabPage tabs={TAB_DATA}/>}/>
                    <Route path="guitars" element={<GuitarPage/>}/>
                    <Route path="form" element={<FormPage/>}/>
                </Routes>
            </HashRouter>
        </>

    );
}

export default App;
