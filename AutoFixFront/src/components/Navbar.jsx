import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icono para el modo oscuro
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icono para el modo claro
import Sidemenu from "./Sidemenu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  //const [darkMode, setDarkMode] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  {/* 
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };
  */}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#2596be' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AutoFix 
          </Typography>

          {/* 
          <IconButton
            sx={{ ml: 1 }} // Establece el margen izquierdo del botón
            onClick={toggleTheme} // Cambia el tema cuando se hace clic en el botón
            color="inherit" // Hereda el color del tema actual
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />} // Muestra el icono de brillo 7 si el modo oscuro está activado, de lo contrario muestra el icono de brillo 4
          </IconButton>
          */}
        </Toolbar>
      </AppBar>

      <Sidemenu open={open} toggleDrawer={toggleDrawer}></Sidemenu>
    </Box>
  );
}
