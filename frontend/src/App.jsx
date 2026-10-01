import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <Navbar brand="ContextIQ" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/solutions"
          element={<PlaceholderPage title="Solutions" text="Industry solutions built on trusted enterprise context. Coming soon." />}
        />
        <Route
          path="/architecture"
          element={<PlaceholderPage title="Architecture" text="How data flows from sources through the context layer to AI agents. Coming soon." />}
        />
        <Route
          path="/why-us"
          element={<PlaceholderPage title="Why Us" text="What makes our approach to enterprise context different. Coming soon." />}
        />
        <Route
          path="/about"
          element={<PlaceholderPage title="About" text="Learn about the team and the mission. Coming soon." />}
        />
        <Route
          path="/contact"
          element={<PlaceholderPage title="Contact" text="Get in touch with us. Coming soon." />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={<PlaceholderPage title="404" text="This page does not exist." />}
        />
      </Routes>
    </div>
  );
}

export default App;