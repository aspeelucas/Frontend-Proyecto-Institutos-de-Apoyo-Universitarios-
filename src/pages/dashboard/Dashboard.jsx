import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="headerDashboard">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.75)",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              width: "50%",
              textAlign: "center",
            }}
          >
            {" "}
            Bienvenidos a Proyecto de Institutos de Apoyo Universitario
            (P.I.A.U)
          </Typography>
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            marginTop: "150px",
            fontSize: "40px",
          }}
        >
          {" "}
          Acerca del proyecto :
        </Typography>
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            width: "50%",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "20px",
          }}
        >
          {" "}
          El Proyecto de Institutos de Apoyo Universitario (P.I.A.U) fue creado
          con la intención de brindar una herramienta de búsqueda a todos los
          estudiantes e institutos de apoyo universitarios relacionados a la
          carrera de Medicina de las universidades de La Rioja capital. La idea
          del proyecto es que cada usuario pueda conocer todos los institutos
          disponibles en la ciudad, como así también agregar o editar nuevos ,
          para que la misma comunidad realice sus aportes o simplemente obtenga
          información acerca de los mismos.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          gap: 10,
          mt: 10,
          mb: 30,
        }}
      >
        <Paper
          onClick={() => navigate("./institutes-list")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            gap: 2,
            width: "15%",
            cursor: "pointer",
            transition: "0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <ArticleIcon
            sx={{
              fontSize: 50,
            }}
          />
          <Typography sx={{ fontSize: "25px" }}>Ver Institutos</Typography>
        </Paper>
      </Box>
    </div>
  );
};
export default Dashboard;
