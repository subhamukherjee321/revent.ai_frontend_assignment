import { Box } from "@chakra-ui/react";
import AllProducts from "./Pages/AllProducts";
import ThemeToggleBtn from "./Components/ThemeToggleBtn";
import BackToTop from "./Components/BackToTopBtn";

function App() {
  return (
    <Box>
      <AllProducts />
      <ThemeToggleBtn />
      <BackToTop />
    </Box>
  );
}

export default App;
