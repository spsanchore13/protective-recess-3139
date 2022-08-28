import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <AppContext.Provider
      value={{
        setToken,
        setIsAuth,
        token,
        isAuth,
        cartProduct,
        setCartProduct,
        totalItems,
        setTotalItems,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
