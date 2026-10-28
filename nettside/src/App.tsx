import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CV from "./pages/CV";
import Post from "./pages/Post";
import Socials from "./pages/Socials";

import Navbar from "./components/NavBar.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </BrowserRouter>
  );
}
