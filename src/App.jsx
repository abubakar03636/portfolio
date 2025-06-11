import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Footer } from "./components/ui/Footer";

export default function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-900 shadow-md ">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}
