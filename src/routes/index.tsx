import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from '../routes/AuthRoutes';
import { SignIn } from '../screens/SignIn';
import { AppRoutes } from './AppRoutes';

export function Routes() {
  const [user, setUser] = useState(false);

  return <NavigationContainer>{user ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>;
}
