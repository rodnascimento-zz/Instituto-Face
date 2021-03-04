import "./app.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Slider />
      </div>
    </div>
  );
}
