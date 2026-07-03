import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
