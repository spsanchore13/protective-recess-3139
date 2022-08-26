import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider value={{ setToken, setIsAuth, token, isAuth }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
