import React from 'react';

import { AuthProvider } from './auth';
import { AppointmentProvider } from './appointment';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <AppointmentProvider>{children}</AppointmentProvider>
  </AuthProvider>
);

export default AppProvider;
