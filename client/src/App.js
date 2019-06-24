import React from "react";
import { BrowserRouter } from "react-router-dom";

import LostAndFound from "./LostAndFoundApp";

// Material helpers
import { ThemeProvider } from "@material-ui/styles";

// Theme
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LostAndFound />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
