import { useEffect, useState } from "react";
import { Header } from "../components/header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [animating, setAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 1000); // Duración de la animación (0.5s)
      return () => clearTimeout(timer);
    }
  }, [animating]);

  console.log(animating);
  useEffect(() => {
    setAnimating(true);
    // Agregar o quitar la clase 'dark' en el <html> cuando el darkMode cambie
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`main-layout bg-slate-300 dark:bg-dark-background relative max-w-screen overflow-auto`}
    >
      {/* Fondo animado con manchas de colores */}
      <div className="colorful-blobs">
        <div className="blob blob1 blur-xl h-[400px] w-[400px]"></div>
        <div className="blob blob2 blur-xl h-[400px] w-[400px]"></div>
        <div className="blob blob3 blur-xl h-[400px] w-[400px]"></div>
      </div>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      {children}
    </div>
  );
};
