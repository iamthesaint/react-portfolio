import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-background">
        <Nav />
        <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
