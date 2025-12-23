
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './App'

import { QueryClientProvider, QueryClient,  } from '@tanstack/react-query'
import { AuthProvider } from './provider/AuthProvider'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
   <RouterProvider router={router} />
</AuthProvider>
  </QueryClientProvider>

)
