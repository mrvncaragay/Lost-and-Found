import React from "react";
import { BrowserRouter } from "react-router-dom";

import LostAndFound from "./LostAndFoundApp";

// Material helpers
import { ThemeProvider } from "@material-ui/styles";

// Theme
import theme from "./theme";

// Externals
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <LostAndFound />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
