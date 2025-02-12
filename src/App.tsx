import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeProvider';
import { AppContextProvider } from './context/AppContext';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ptBR } from '@mui/x-date-pickers/locales';
import { instanceI18next } from './lib/i18n';
import router from './router';

import '@/index.css';

const queryClient = new QueryClient();

instanceI18next();

function App() {
  return (
    <LocalizationProvider 
      dateAdapter={AdapterDayjs} 
      localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AppContextProvider>
            <RouterProvider router={router} />
          </AppContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
