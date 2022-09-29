import { Grid } from "@chakra-ui/react";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import { Todo } from "./pages/Todo/Todo";

function App() {
  return (
    <>
      <Navbar />
      <Grid templateColumns='1fr 2fr'>
        <Menu />
        <Todo />
      </Grid>
    </>
  );
}

export default App;
