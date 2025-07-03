import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'


const messages = [
  { lang: "en", msg: "Welcome to the digital crypt of GOTHHFROGG." },
  { lang: "es", msg: "Bienvenido al criptoespacio digital de GOTHHFROGG." },
  { lang: "fr", msg: "Bienvenue dans le repaire numérique de GOTHHFROGG." },
  { lang: "jp", msg: "ゴスフロッグの電脳空間へようこそ。" },
  { lang: "de", msg: "Willkommen im digitalen Versteck von GOTHHFROGG." },
];

console.log("%c✦ GOTHHFROGG ✦", "font-size: 18px; color: #ff6ec7; font-family: monospace;");
messages.forEach((m) =>
  console.log(`%c[${m.lang}] ${m.msg}`, "color: #ffb3e6; font-family: monospace;")
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/gothhfrogg">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

window.frogpower = () => {
  console.log("'Gothhfrogg never dies.' - You found the secret chant."); 
};