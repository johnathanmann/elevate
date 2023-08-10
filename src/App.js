import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./layouts/nav";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  return (
    <div>
    <HashRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}/>
      </Routes>
    </HashRouter>
  </div>
  );
}

export default App;
