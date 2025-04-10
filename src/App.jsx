import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar'
import Music from './Music'
import Videos from './Videos'
import Tour from './Tour'
import Contact from './Contact'
import Footer from './Footer'
import Cookies from './Cookies'
import Privacy from './Privacy'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music" element={<Music />} /> 
          <Route path="/videos" element={<Videos />} /> 
          <Route path="/tour" element={<Tour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
