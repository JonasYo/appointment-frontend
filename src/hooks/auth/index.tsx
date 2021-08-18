import React, { createContext, useCallback, useState, useContext } from 'react';
import { SignIn } from '@services/auth';
import storageUtil from '@utils/storageUtil';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = storageUtil.getFromStorage('token');
    const user = storageUtil.getFromStorage('user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    console.log('b');

    const response = await SignIn({
      email,
      password,
    });

    const { token, user } = response.data;

    storageUtil.setInStorage('token', token);
    storageUtil.setInStorage('user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    storageUtil.removeFromStorageIfExists('token');
    storageUtil.removeFromStorageIfExists('user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  console.log('context', context);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
