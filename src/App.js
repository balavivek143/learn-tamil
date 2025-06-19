import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-blue/theme.css'; // PrimeReact Theme
import 'primereact/resources/primereact.min.css';                 // Core CSS
import 'primeicons/primeicons.css';                               // Icons
import 'primeflex/primeflex.css';                                 // Optional: Utility CSS
import SelectLanguage from 'pages/SelectLanguage';
import Uyir from 'pages/tamil/Uyir';
import Mei from 'pages/tamil/Mei';
import UyirMei from 'pages/tamil/UyirMei';
import TamilHomePage from 'pages/tamil/TamilHomePage';
import TopNavBar from 'pages/TopNavBar';
import { useEffect } from 'react';



const App = () => {
  const disablePinchZoomInHandDevices = () => {
    // eslint-disable-next-line
    const preventZoom = (e) => {
        const preventPinch = (e) => {
          if (e.touches?.length > 1) {
            e.preventDefault();
          }
        };

        document.addEventListener('touchmove', preventPinch, { passive: false });

        return () => {
          document.removeEventListener('touchmove', preventPinch);
        };
    }
  }

  useEffect(() => {
      disablePinchZoomInHandDevices();
   }, []);

  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<SelectLanguage />} />
        <Route path="/tamilhome" element={<TamilHomePage />} />
        <Route path="/uyir" element={<Uyir />} />
        <Route path="/mei" element={<Mei />} />
        <Route path="/uyirmei" element={<UyirMei />} />
      </Routes>
    </Router>
  );
}

export default App;
