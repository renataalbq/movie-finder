import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext({
    login: (userData) => {}, 
    logout: () => {}, 
    logged: false, 
    user: null
});

export const UserProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);
  console.log(logged);
  useEffect(() => {
    AsyncStorage.getItem('user').then((data) => {
      if (data) {
        setUser(JSON.parse(data));
        setLogged(true);
      }
    });
  }, []);

  const login = async (userData: React.SetStateAction<null>) => {
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setLogged(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
    setLogged(false);
  };

  return (
    <UserContext.Provider value={{ logged, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};