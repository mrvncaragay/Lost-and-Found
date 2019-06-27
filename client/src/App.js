import React from "react";
import { BrowserRouter } from "react-router-dom";

import LostAndFound from "./LostAndFoundApp";

//CurrentUser
import { CurrentUserProvider } from "./contexts/currentUser";

// Material helpers
import { ThemeProvider } from "@material-ui/styles";

// Theme
import theme from "./theme";

// Externals
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <LostAndFound />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
