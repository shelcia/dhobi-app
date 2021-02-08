import React from "react";
import { createContext, useState } from "react";

export const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  return (
    <React.Fragment>
      <AmountContext.Provider value={[amount, setAmount]}>
        {children}
      </AmountContext.Provider>
    </React.Fragment>
  );
};
