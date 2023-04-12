import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Courses from "./components/Courses";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/courses" element={<Courses/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
