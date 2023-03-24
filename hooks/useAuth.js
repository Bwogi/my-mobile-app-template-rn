import { View, Text } from 'react-native';
import React, { createContext } from 'react';

const authContext = React.createContext({});

export const AuthProvider = ({ children }) => {
	return <authContext.Provider value={null}>{children}</authContext.Provider>;
};
