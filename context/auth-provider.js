import React, {createContext, useState} from 'react';
import {Text} from 'react-native';
// import auth from '@react-native-firebase/auth';
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        login: async (email, password) => {
          console.log('in the login fonction');
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            setError(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            setError(e);
          }
        },
        logout: async () => {
          try {
            console.log('in the logut fonction');
            auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
