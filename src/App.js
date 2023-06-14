import Home from "./components/Home";
import NavBar from "./components/NavBar"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
