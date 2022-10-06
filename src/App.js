import { Grid, Stack } from "@chakra-ui/react";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes } from "./routes/Routes";

function App() {

  return (
    <>
      <Navbar />
      <Menu />
      <Routes />
    </>
  );
}

export default App;
