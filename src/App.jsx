import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Businesses from "./pages/Businesses"
import BusinessDetailsPage from "./pages/BusinessDetails"
import Events from "./pages/Events"
import EventDetails from "./pages/EventDetails"
import Grants from "./pages/Grants"
import Veterans from "./pages/Veterans"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/businesses/:businessId" element={<BusinessDetailsPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/veterans" element={<Veterans />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
