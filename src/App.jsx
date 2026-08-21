// import ActionStateForm from "./components/ActionStateForm";
// import OptimisticForm from "./components/OptimisticForm";
import SuspenseWrapper from "./components/use/SuspenseWrapper";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        {/* <h1>Hello World</h1> */}
        {/* <ActionStateForm /> */}
        {/* <OptimisticForm /> */}
        <SuspenseWrapper />
      </DataProvider>
    </>
  );
}

export default App;
