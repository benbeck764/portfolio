import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent';
import { getTheme } from './theme/theme';
import { CustomThemeProvider } from '@benbeck764/react-components';

const theme = getTheme();

function App(): JSX.Element {
  return (
    <CustomThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppContent />
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
