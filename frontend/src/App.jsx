import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreateContent from "./pages/CreateContent";
import EditContent from "./pages/EditContent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateContent />} />
        <Route path="/edit/:id" element={<EditContent />} />
      </Routes>
    </BrowserRouter>
  );
}