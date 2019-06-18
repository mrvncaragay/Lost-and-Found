import React from 'react';
import LostAndFound from './LostAndFoundApp';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// Theme
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LostAndFound />
    </ThemeProvider>
  );
}

export default App;
