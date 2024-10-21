import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    document.documentElement.classList.toggle("dark", !theme);
  };
  return (
    <>
      <div
        className={`min-h-screen w-full flex flex-col md:flex-row subpixel-antialiased ${
          theme ? "bg-slate-800" : "bg-white"
        }`}
      >
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Home />
      </div>
    </>
  );
}

export default App;
