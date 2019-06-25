import React from "react";
import { BrowserRouter } from "react-router-dom";

import LostAndFound from "./LostAndFoundApp";

//CurrentUser
import { CurrentUserProvider } from "./contexts/currentUser";

// Material helpers
import { ThemeProvider } from "@material-ui/styles";

// Theme
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CurrentUserProvider>
          <LostAndFound />
        </CurrentUserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
