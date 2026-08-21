import { createContext } from "react";

const data = "this is a mock data";

const DataContext = createContext();

function DataProvider({ children }) {
  return <DataContext value={data}>{children}</DataContext>;
}

export { DataProvider, DataContext };
