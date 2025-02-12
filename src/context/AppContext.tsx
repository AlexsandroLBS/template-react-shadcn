import { ReactNode, createContext } from "react";

export interface AppContextState {
    //TODO criar campos de contexto
}

const AppContext = createContext<AppContextState | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
    //TODO criar estados das variaveis do contexto 


  return (
    <AppContext.Provider
      value={{
        //TODO criar campos de contexto
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
