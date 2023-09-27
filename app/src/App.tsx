import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AppContent from './AppContent';
import { getTheme } from './theme/theme';
import { CustomThemeProvider } from '@benbeck764/react-components';

const theme = getTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 1 day in ms
      cacheTime: 1000 * 60 * 60 * 24, // 1 day in ms
    },
  },
});

function App(): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider theme={theme}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            {process.env.REACT_APP_ENV_NAME === 'local' && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
            <Router>
              <CssBaseline />
              <AppContent />
            </Router>
          </QueryClientProvider>
        </RecoilRoot>
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
