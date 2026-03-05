import Homepage from "./pages/Homepage"
import Navbar from "./component/NavBar"
import Rooms from "./pages/Rooms"
import { Routes, Route } from 'react-router-dom'
import Footer from "./component/Footer"
import Contact from "./pages/Contact"
import Amenities from "./pages/Amenities"
import RoomDetails from "./pages/RoomDetails"
import WhatsAppButton from "./component/WhatsAppButton"
import FloatingContact from "./component/FloatingContact"
function App() {


  return (
    <>
      <Navbar />
      <FloatingContact />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
