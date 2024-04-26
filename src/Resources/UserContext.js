import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        userID: '',
        displayName: 'Guest',
        userPrefs: {
            language: 'en-US',
            dateFormat: 'mm/dd/yyyy',
            colorScheme: 'dark-mode'
        }
    });

    const updateData = (key, newValue) => {
        setUserData(prevData => ({
            ...prevData,
            [key]: newValue
        }));
    };

    const userContextValues = {
        userData,
        updateData
    };


    return (
        <UserContext.Provider value={userContextValues}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for consuming the context
export const useUserContext = () => {
    return useContext(UserContext);
}; 