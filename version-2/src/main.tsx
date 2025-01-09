import { Provider as ChakraProvider } from "./components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
