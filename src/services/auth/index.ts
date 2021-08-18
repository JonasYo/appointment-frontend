import apiConsumer from '../apiConsumer';

export const SignIn = async (dto: any) => apiConsumer.post('api/login', dto);

export const SingUp = async (dto: any) => apiConsumer.post('api/signup', dto);

export const ForgotPassword = async (dto: any) => apiConsumer.post('api/password/forgot', dto);

export const ChangePassword = async (dto: any) => apiConsumer.post('api/password/reset', dto);
