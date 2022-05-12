import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Alarm from "./Alarm"
import Timer from "./Alarm"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/alarm" element={<Alarm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
