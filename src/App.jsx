import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";

function App() {
  return (
    <div className="hero-section">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
