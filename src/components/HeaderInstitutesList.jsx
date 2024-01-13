import {  Box, Typography } from "@mui/material";
const HeaderInstitutesList = () => {
  return (
    <div className="headerInstitutesList">
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
          Conoce los institutos disponibles para vos
        </Typography>
      </Box>
    </div>
  );
};

export default HeaderInstitutesList;
