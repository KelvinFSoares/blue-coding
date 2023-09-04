import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const ExampleContext = createContext({
  exampleData: {} as string[],
  setExampleData: {} as Dispatch<SetStateAction<Partial<string[]>>>,
});

export function ExampleProvider({ children }: { children: React.ReactNode }) {
  const [exampleData, setExampleData] = useState([]);

  return (
    <ExampleContext.Provider
      value={{
        exampleData,
        setExampleData,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
}
