import React from 'react';
import AuthProvider from 'components/AuthProvider';
import BrowserRouters from 'routes/BrowserRouters';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouters />
    </AuthProvider>
  );
}
