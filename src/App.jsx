





import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './Routes';
import { Toaster } from 'sonner';

import { AppContextProvider } from './context/AppContextProvider';

function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
      <AppRoutes/>
      
      </AppContextProvider>
      <Toaster/>
    </QueryClientProvider>
    
  )
}

export default App
