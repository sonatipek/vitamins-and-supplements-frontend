import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import {ThemeProvider} from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
