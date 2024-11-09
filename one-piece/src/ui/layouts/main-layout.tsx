import React from "react";
import { useEffect, useState } from "react";
// import { Header } from "../components/header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // const [darkMode, setDarkMode] = useState<boolean>(true);
  const [animating, setAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 1000); // Duración de la animación (0.5s)
      return () => clearTimeout(timer);
    }
  }, [animating]);

  // useEffect(() => {
  //   setAnimating(true);
  //   // Agregar o quitar la clase 'dark' en el <html> cuando el darkMode cambie
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <div className={`main-layout bg-oceanBlue-400 relative max-w-screen `}>
      {/* <Header setDarkMode={setDarkMode} darkMode={darkMode} /> */}
      {children}
      {/* Capa de transición
      {animating && (
        // <div
        //   className={`fixed inset-0 ${
        //     darkMode ? "bg-white" : "bg-dark-background"
        //   } transition-all  duration-1000 opacity-0 animate-fade-out z-8 delay-150`}
        // ></div>
        <div
          className={`transition-all duration-500  w-full ${
            darkMode ? "expand" : "collapse"
          }
          ${darkMode ? "bg-white" : "bg-dark-background"}`}
        >{`  `}</div>
      )} */}
    </div>
  );
};
