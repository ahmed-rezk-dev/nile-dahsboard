import { useApollo } from 'graphql/apollo';
import React, { createContext, ReactNode, useContext } from 'react';
import { AppContext } from 'store/context';

type Props = {
    children?: ReactNode;
};

const AuthContext = createContext({ auth: {} });

const AuthProvider: React.FC<Props> = ({ children }) => {
    const { state } = useContext(AppContext);
    const auth = state.auth;
    console.log('🚀 ~ file: AuthProvider.tsx ~ line 13 ~ auth ', auth);
    useApollo(auth);
    return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider as default, useAuth };
