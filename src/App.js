import InitialNavbar from "./initialappbar/InitialNavbar";
import { StyledEngineProvider } from "@mui/material/styles";
import CardsContainer from "./cardssection/CardsContainer";
import CardsGraphsLayout from "./cards_and_graphs_layout/CardsGraphsLayout";
import LineChart from "./chartsandgraphs/LineChart";

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <InitialNavbar />
        <CardsContainer />
        <CardsGraphsLayout />
        {/* <LineChart /> */}
      </StyledEngineProvider>
    </div>
  );
}

export default App;
