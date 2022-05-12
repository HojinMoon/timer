import "./App.css"
import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <Link to="/clock-timer">Timer</Link>
      <hr />
      <Link to="/alarm">Alarm</Link>
    </>
  )
}

export default App
