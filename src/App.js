import Home from "./pages/Home"
import Place from "./pages/Place"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/404"

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route exact path="/place" element={<Place />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App