import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS imports
import './index.css'
import 'semantic-ui-css/semantic.min.css'
// Page imports
import App from './App.jsx'
import Layout from "./components/layout/Layout.jsx";
import NoPage from "./components/pages/NoPage.jsx";
import WeatherPage from "./components/pages/WeatherPage.jsx";
import About from "./components/pages/About.jsx";

// export default function Main() {
//     console.log("Main");
//     return (
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Layout />} >
//                 <Route index path="weather" element={<WeatherPage />} />
//                 <Route path="about" element={<About/>} />
//                 <Route path="*" element={<NoPage/>} />
//             </Route>
//         </Routes>
//         </BrowserRouter>
//     );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
