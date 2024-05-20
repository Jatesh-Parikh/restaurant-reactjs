import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NavIcon from "./components/NavIcon";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
