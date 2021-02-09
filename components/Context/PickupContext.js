/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";

export const PickupContext = createContext();

export const PickupProvider = ({ children }) => {
  const [pickup, setPickup] = useState("");
  return (
    <React.Fragment>
      <PickupContext.Provider value={[pickup, setPickup]}>
        {children}
      </PickupContext.Provider>
    </React.Fragment>
  );
};
