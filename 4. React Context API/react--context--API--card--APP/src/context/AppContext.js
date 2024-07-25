import React, { useState } from 'react';

const AppContext = React.createContext(); // Create a context

// Create context provider
export function AppContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const value = {
        user,
        setUser,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
