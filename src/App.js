import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Nav from "./layouts/nav";
import Footer from "./layouts/footer";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
    <HashRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}/>
      </Routes>
    <Footer />
    </HashRouter>
  </div>
  );
}

export default App;
