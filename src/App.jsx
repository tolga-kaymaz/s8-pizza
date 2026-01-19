import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Success from './pages/Success'
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}

export default App
