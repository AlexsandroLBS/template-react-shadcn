import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeProvider';
import '@/index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
