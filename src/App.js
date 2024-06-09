/*Desarrollar una app de "TO DO" en React.
- Crear una app simple que tenga un input y un botón "Agregar" 
- Al escribir una línea en el input, agrega la línea en una lista.
- Luego al hacer click en alguna línea de esa lista, le cambia el estilo y la pone tachada.
- Bonus: Realizar tests unitarios en JEST para los componentes utilizados.
- Bonus+: Que esa misma página contenga un contador de tareas pendientes.
- Bonus++: Utilizar cualquier librería UI (ej: MaterialUI, ReactBootstrap, CoreUI, etc)
*/

import React from "react";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import TodoApp from "./components/TodoApp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
      <TodoApp darkMode={darkMode} />
    </ThemeProvider>
  );
}

export default App;
