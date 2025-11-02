import { MantineProvider } from "@mantine/core";
import { MainPage } from "./pages/home";
import { MainLayout } from "./ui/layouts/main-layout";
import "@mantine/core/styles.css";
import "./styles/root-styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterDetailPage } from "./pages/characterDetail.page";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/character/:id" element={<CharacterDetailPage />} />
            </Routes>
          </MainLayout>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
