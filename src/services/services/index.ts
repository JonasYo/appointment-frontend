import apiConsumer from '../apiConsumer';

import { Category } from '@interfaces/index';

export const getAllServices = async () => apiConsumer.get<Category[]>('api/services');
