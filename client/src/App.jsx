import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import SocketComponent from "./components/SocketComponent";
import Register from "./components/Register";

function App() {
  //TODO: protecting routes that need authentication
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socket" element={<SocketComponent />} />
        <Route path="/auth">
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
