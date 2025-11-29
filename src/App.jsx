import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bookings from './Pages/Bookings'
import FloatingWhatsApp from './Components/FloatingWhatsApp'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Parallax from './Components/Parallax'
import Services from './Components/Services'
import Admin from './Pages/Admin'

function App() {

  return (
    <>
      <Header />
        <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Gallery />
              <Parallax />
            </>
          }
        />

        {/* Booking Page */}
        <Route path="/booking" element={<Bookings />} />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
