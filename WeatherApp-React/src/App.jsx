import './App.css'

import WeatherPage from "./components/pages/WeatherPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import About from "./components/pages/About.jsx";
import NoPage from "./components/pages/NoPage.jsx";

function App() {
    console.log("App");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<WeatherPage />} />
                    <Route path="about" element={<About/>} />
                    <Route path="*" element={<NoPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
