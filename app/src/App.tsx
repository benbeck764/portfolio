import { BrowserRouter as Router } from 'react-router-dom';
import { CustomThemeProvider } from '@benbeck764/react-components';
import CssBaseline from '@mui/material/CssBaseline';
import { LazyMotion, domAnimation } from 'framer-motion';
import AppContent from './AppContent';
import { getTheme } from './theme/theme';

const theme = getTheme();

function App(): JSX.Element {
  return (
    <CustomThemeProvider theme={theme}>
      <LazyMotion features={domAnimation} strict>
        <Router>
          <CssBaseline />
          <AppContent />
        </Router>
      </LazyMotion>
    </CustomThemeProvider>
  );
}

export default App;
