import React, { createContext, useCallback, useState, useContext } from 'react';
import storageUtil from '@utils/storageUtil';

interface AppointmentState {
  service: Service;
  appointments: [];
}

interface Service {
  name: string;
  description: string;
  category: string;
  duration: string;
  price: string;
  is_active: string;
  serviceId: string;
}

interface AppointmentContextData {
  data: AppointmentState;
  persistService: (service: Service) => void;
  persistAppointment: (appointments: any) => void;
}

const AppointmentContext = createContext<AppointmentContextData>({} as AppointmentContextData);

const AppointmentProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AppointmentState>(() => {
    const service = storageUtil.getFromStorage('service');
    const appointments = storageUtil.getFromStorage('appointments') ;

    if (service && appointments) {
      return { service, appointments };
    }

    return {} as AppointmentState;
  });

  const persistService = useCallback(async (service) => {
    storageUtil.setInStorage('service', service);

    setData({...data, service });
  }, []);

  const persistAppointment = useCallback(async (appointments) => {
    storageUtil.setInStorage('appointments', appointments);

    setData({...data, appointments });
  }, []);


  return (
    <AppointmentContext.Provider value={{ data, persistService, persistAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

function useAppointment(): AppointmentContextData {
  const context = useContext(AppointmentContext);

  console.log('context', context);

  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
}

export { AppointmentProvider, useAppointment };
