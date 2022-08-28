import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppContextProvider from "./Contexts/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <ChakraProvider>
            <AppContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AppContextProvider>
        </ChakraProvider>
    </StrictMode>
);
