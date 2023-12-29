import { Box, Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { appActions } from "../pages/redux/appRedux";


const InstitutesCard = () => {
  const [institutes, setInstitutes] = useState([]);
  const dispatch = useDispatch();
  const getInstitutes = useCallback(async () => {
    try {
      dispatch(appActions.loading(true));
      const response = await axios.get("http://localhost:3000/places");
      return setInstitutes(response.data);
    } catch (error) {
      console.log(error);
    }finally{
      dispatch(appActions.loading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    getInstitutes();
  }, [getInstitutes]);

  
  return institutes.map((institute) => (
    
      
    <Box>
      
      <Card sx={{ maxWidth: "100%", marginTop: "60px",transition: "0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              }}} key={institute.id}>
        <CardMedia
          sx={{ height: 400 }}
          image={institute.img}
          title="green iguana"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {institute.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {institute.descripcion}
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:4 ,marginBottom:10}}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "black",
              background: "white",
              backgroundColor: "yellow",
            }}
          >
            Ubicacion
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "black",
              background: "white",
              backgroundColor: "yellow",
            }}
          >
            EDITAR
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "black", background: "white" }}
          >
            BORRAR
          </Button>
        </CardActions>
      </Card>
    </Box>
       
 
  ));
};

export default InstitutesCard;
