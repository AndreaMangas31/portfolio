import { Button } from "@mantine/core";
import {
  IconBrandReact,
  IconBrandCss3,
  IconDownload,
  IconExternalLink,
} from "@tabler/icons-react";
import { AboutMeText } from "./aboutMeText.component";
import { goToExternalPage } from "../../utils/generalFunctions.utils";
const GITHUB_URL = "https://github.com/AndreaMangas31";

export const AboutMeSalutation = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:w-3/6 xl:w-5/6  lg:pr-0 pt-8">
      <h2 className="md:animate-typing md:whitespace-nowrap md:overflow-hidden text-2xl sm:text-4xl font-semibold text-green-700 dark:text-green-400">
        Hello, I am Andrea Mangas
      </h2>
      <h3
        className="lg:opacity-0 lg:animate-typing lg:whitespace-nowrap lg:overflow-hidden text-xl sm:text-3xl font-semibold text-white-400 "
        style={{ animationDelay: "900ms" }}
      >
        A Front-End Developer with a Passion for Design
      </h3>
      <div className="flex flex-col gap-4  items-center px-8">
        <AboutMeText />
        <div className="flex flex-row items-center w-full gap-8 ">
          <div className="hidden md:flex flex-row animate-pulse duration-150 items-center">
            <IconBrandReact stroke={0.5} size={60} className="-mt-12 text-48" />
            <IconBrandCss3 stroke={0.5} size={60} className="mt-12" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              className="flex gap-8 dark:bg-green-400  dark:hover:bg-green-400 dark:hover:text-black dark:hover:brightness-75 dark:text-black text-sm hover:bg-green-600 bg-green-700 hover:text-white"
              aria-label="Download Andrea's CV"
            >
              <span className=" text-md">Download CV</span>
              <IconDownload size={20} className="ml-2" />
            </Button>
            <Button
              className="flex flex-row gap-4 dark:bg-black border dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 hover:bg-green-400/10 brightness-120 dark:hover:bg-gray-800  dark:hover:brightness-120 hover:text-green-700 text-sm border-green-700 text-green-700 bg-white"
              onClick={(e) => {
                goToExternalPage(e, GITHUB_URL);
              }}
              aria-label="Open Andrea's Github in a new tab"
            >
              <span className="text-md">Github</span>
              <IconExternalLink size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
