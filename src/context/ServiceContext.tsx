"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ServiceType = "santex" | "elektrika";

type ServiceContextType = {
  service: ServiceType;
  setService: (s: ServiceType) => void;
};

const ServiceContext = createContext<ServiceContextType>({
  service: "santex",
  setService: () => {},
});

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState<ServiceType>("santex");

  return (
    <ServiceContext.Provider value={{ service, setService }}>
      {children}
    </ServiceContext.Provider>
  );
}

export const useService = () => useContext(ServiceContext);
