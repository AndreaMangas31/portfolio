//***Styles ****/
import "@mantine/core/styles.css";
import "./styles/text-styles.css";
import "./styles/animation-styles.css";
import "./styles/layout-styles.css";
/*** Providers */
import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import React from "react";
/*** Components and utils ***/
import { MainLayout } from "./layouts/main-layout";
import { routeViews } from "../routes/routes";

function App() {
  return (
    <MantineProvider>
      <MainLayout>
        <Routes>
          {Object.values(routeViews).map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={React.createElement(element)}
            />
          ))}
        </Routes>
      </MainLayout>
    </MantineProvider>
  );
}

export default App;
