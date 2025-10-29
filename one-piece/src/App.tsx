import { MantineProvider } from "@mantine/core";
import { MainPage } from "./pages/home";
import { MainLayout } from "./ui/layouts/main-layout";
// import "./styles/text-styles.css";
// import "./styles/animation-styles.css";
import "@mantine/core/styles.css";
import "./styles/root-styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
