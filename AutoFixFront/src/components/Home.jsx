import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; 
import Typography from '@mui/material/Typography'; 


const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h2" component="h2" sx={{ marginBottom: '25px' }}>
            Autofix: Sistema de Reparacion de Vehículos
      </Typography>
      <Stack direction="column" spacing={2} alignItems={'center'}>
        <Button variant="contained" size="large"  onClick={() => navigate("/vehicles/List")} style={{ width: 250 }}>
          Ver Listado vehículos
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/bonuses/add")} style={{ width: 250 }}>
          Ver y Actualizar Bonos
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/repairsType/list")} style={{ width: 250 }}>
          Ver y Actualizar Tipos de Reparaciones
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/GenerateRepair/add")} style={{ width: 250 }}>
          Registrar Reparación
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/repairs/list")} style={{ width: 250 }}>
          Ver Reparaciones
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/GenerateRepair/AVGHourReport")} style={{ width: 250 }}>
          Reporte de horas promedio
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/GenerateRepair/ViewRepairsTypeReport")} style={{ width: 250 }}>
          Reporte Reparaciones vs Tipo
        </Button>
        <Button variant="contained" size="large" onClick={() => navigate("/GenerateRepair/ViewRepairsByCombustible")} style={{ width: 250 }}>
          Reporte Reparaciones por combustible
        </Button>
      </Stack>
    </div>
  );
};

export default Home;
