/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({});
  return (
    <React.Fragment>
      <OrderContext.Provider value={[order, setOrder]}>
        {children}
      </OrderContext.Provider>
    </React.Fragment>
  );
};
