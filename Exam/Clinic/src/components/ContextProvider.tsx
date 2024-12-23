import { createContext, ReactNode, useContext, useState } from "react";
import { Doctor, doctorList } from "../models/Doctor";

type GlobalContext = {
  doctorlist: Doctor[];
  //setChosenEvents: React.Dispatch<React.SetStateAction<any[]>>;
};

const Context = createContext<GlobalContext>({} as GlobalContext);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [doctorlist, setDoctorlist] = useState<Doctor[]>(doctorList);
  return (
    <Context.Provider value={{ doctorlist }}>
      {children}
    </Context.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useGlobalContext должен использовать ContextProvider");
  }
  return context;
}
