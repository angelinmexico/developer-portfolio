import { Routes, Route } from 'react-router-dom'
import HomePage from 'features/home/HomePage'
import AboutPage from 'features/about/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App
