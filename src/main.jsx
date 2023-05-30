import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes';
import AuthProvider from './providers/authProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <div className='max-w-[1150px] mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
