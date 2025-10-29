import { Button, Tooltip } from "@mantine/core";
// import { useEffect, useState } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}
export const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <div className="fixed top-0 h-20 items-center flex justify-between w-full px-8 dark:text-white backdrop-blur-lg	 text-lg py-8 z-50">
      <Tooltip position="bottom" withArrow offset={5} label="Go to home page">
        <Link
          to="/"
          className="flex h-fit hover:animate-pulse items-start !my-0 !p-0"
        >
          <span>Andrea Mangas</span>
        </Link>
      </Tooltip>
      <div className="flex flex-row justify-around items-center gap-6">
        <span>My proyects</span>
        <span>About Me</span>
        <span>Contact</span>
        <Button
          className="flex justify-center items-center cursor-pointer bg-transparent hover:bg-gray-200/20  h-10"
          style={{
            borderColor: darkMode ? "white" : "black",
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <IconSun className="w-5 h-5" color="white" />
          ) : (
            <IconMoonStars className="w-5 h-5" color="black" />
          )}
          <span className={`text-sm ml-2 ${!darkMode ? "text-black" : ""}`}>
            {!darkMode ? "Dark" : "Light"} mode
          </span>
        </Button>
      </div>
    </div>
  );
};
