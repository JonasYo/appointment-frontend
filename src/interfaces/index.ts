import moment from 'moment';
moment.locale('pt-br');

export interface Service {
  name: string;
  description: string;
  category: string;
  duration: string;
  price: string;
  is_active: string;
  serviceId: string;
}

export interface Category {
  category: string;
  items: [Service];
}

export interface Appointment {
  name: string;
  price: string;
  date: moment.Moment;
  hour: string;
  serviceId: string;
}
