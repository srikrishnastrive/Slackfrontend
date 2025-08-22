
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './Routes';
import { Toaster } from 'sonner';
import { AppContextProvider } from './context/AppContextProvider';
import { Modals } from './components/organisms/Modals/Modal';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modals />
        <Toaster />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
