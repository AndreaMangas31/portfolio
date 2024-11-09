import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { MainPage } from "./pages/home";
import { MainLayout } from "./ui/layouts/main-layout";
// import "./styles/text-styles.css";
// import "./styles/animation-styles.css";
import "./styles/root-styles.css";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <MantineProvider>
      <MainLayout>
        <MainPage />
      </MainLayout>
    </MantineProvider>
  );
}

export default App;
