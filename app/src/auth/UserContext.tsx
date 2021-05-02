import React, { createContext, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from './FirebaseProvider';
import type { IUserContext, IUser } from '../../types/user';
export interface Props {
  children: React.ReactChild;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider: React.FC<Props> = ({ children }: any) => {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState<IUser>({ displayName: null, email: null });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged(function (user) {
      const showName = user?.displayName ? user.displayName : user?.email;
      showName && console.log(`2. Firebase re-authenticated : ${showName}`);
      user && setUser(user as IUser);
      setLoading(false);
    });
    console.log('1. Firebase re-authenticating');
  }, []);

  const logout = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  };
  return (
    <div>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <UserContext.Provider value={{ user, setUser, logout }}>
          {children}
        </UserContext.Provider>
      )}
    </div>
  );
};
