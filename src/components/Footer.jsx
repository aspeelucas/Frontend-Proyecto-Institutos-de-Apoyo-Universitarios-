import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "300px",
        widows: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{display:"flex",gap:20}}>
        <Box sx={{ width: "30%", padding: "40px" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
            P.I.A.U
          </Typography>
          <Typography sx={{ marginTop: "20px" }}>
            Proyecto de Institutos de Apoyo Universitario, buscamo brindar un
            espacio de encuentro entre estudiantes y profesionales de la salud.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            fontWeight: "600px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{ cursor: "pointer", fontWeight: "600" }}
            onClick={() => navigate("./")}
          >
            INICIO
          </Typography>
          <Typography
            sx={{ cursor: "pointer", fontWeight: "600" }}
            onClick={() => navigate("./institutes-list")}
          >
            INSTITUTOS
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "40px", marginTop: "10px" }}>
        <Typography sx={{ fontWeight: "600" }}>
          Desarrollado por Lucas Aspee
        </Typography>
        <Typography sx={{ fontWeight: "600" }}>
          Contacto : aspeelucas@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
