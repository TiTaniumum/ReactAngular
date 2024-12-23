import { createContext, ReactNode, useContext, useState } from "react";

type GlobalContext = {
  chosenEvents: any[];
  setChosenEvents: React.Dispatch<React.SetStateAction<any[]>>;
};

const Context = createContext<GlobalContext>({} as GlobalContext);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [chosenEvents, setChosenEvents] = useState<any[]>([]);
  return (
    <Context.Provider value={{ chosenEvents, setChosenEvents }}>
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
