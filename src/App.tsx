import ContenedorTareas from "./components/ItemCard";
import PrimarySearchAppBar from "./components/Header";
import { Home } from "./containers/Home";
import ItemCard from "./components/ItemCard";
import { Divider, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Home />
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
      >
        {
          [1,2,3,4,5].map(()=>{
            return <ItemCard/>
          })
        }
      </Stack>
      
    </>
  );
}

export default App;
