import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}><Router>{children}</Router></QueryClientProvider>
};

export default AppProviders;
