import apiConsumer from '../apiConsumer';

export const SignIn = async dto => apiConsumer.post('api/login', dto);

export const SingUp = async dto => apiConsumer.post('api/signup', dto);

export const ForgotPassword = async dto => apiConsumer.post('api/password/forgot', dto);

export const ChangePassword = async dto => apiConsumer.post('api/password/reset', dto);
