import React from 'react';
import { Router } from 'react-router-dom';

// Externals
import { createBrowserHistory } from 'history';

import LostAndFound from './LostAndFoundApp';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// Theme
import theme from './theme';

// Browser history
const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <LostAndFound />
      </Router>
    </ThemeProvider>
  );
}

export default App;
