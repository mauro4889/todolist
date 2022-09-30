import { Grid, Stack } from "@chakra-ui/react";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";
import { Todo } from "./pages/Todo/Todo";
import { Routes } from "./routes/Routes";

function App() {
  return (
      <Stack w='100vw' h='100vh'>
        <Navbar />
        <Grid templateColumns="1fr 2fr">
          <Menu />
          <Routes/>
        </Grid>
      </Stack>
  );
}

export default App;
