// libraries
import React, {
  useEffect, useState, createContext, useMemo, useContext,
} from 'react';
// api
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from 'api/FireBase/databaseConfig';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

type AuthorizedProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthorizedProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (currentUser: User) => {
      const isUser = !!currentUser;

      setIsAuth(isUser);
      if (currentUser) {
        setUserEmail(currentUser.email);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({ isAuth, userEmail }), [isAuth, userEmail]);

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <h1 className="router-wait">Wait...</h1> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
