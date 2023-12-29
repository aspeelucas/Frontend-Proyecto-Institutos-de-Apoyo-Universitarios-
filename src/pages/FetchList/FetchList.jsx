import React, { useCallback, useEffect, useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import api from "../../services/api";
import { useDispatch } from "react-redux";
import { appActions } from "../redux/appRedux";
import PokeCard from "../../components/PokeCard";
import imgPokedex from "../../assets/images/mipokedex.png";
import imgArrow from "../../assets/images/poke-arrow.png";

const FetchList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const dispatch = useDispatch();

  const getPokemons =  useCallback(
    async (url) => {
      try {
        dispatch(appActions.loading(true));
        const result = await api.GET(url || api.pokemons);
        if (result) {
          setPokemons(result.results);
          setNext(result.next);
          setPrevious(result.previous);
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(appActions.loading(false));
      }
    },
    [dispatch],
  )
  
  
  
useEffect(() => {
    getPokemons();
  }, [getPokemons]);


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <img src={imgPokedex} alt="" />
        </Box>
      </Grid>
      {pokemons &&
        pokemons.map((p, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <PokeCard item={p} />
            </Grid>
          );
        })}
        <Box className="botonesBoxPokedex">     
        <Grid item >
          <Card
            p={2}
            sx={{
              
              display: "flex",
              height: 100,
              width: "270px",
              cursor: "pointer",
             
              backgroundColor: "#2e6894",
              "&:hover": { backgroundColor: "#5acdbd" },
            }}
            onClick={() => getPokemons(previous)}
          >
            <CardContent sx={{ display:'flex', gap:'10px', justifyContent:'center', alignItems:'center' , width:'100%'}}>
              <img className="arrowImgReturn" src={imgArrow} alt="" />
              <Typography component="div" variant="h5" sx={{ color: "white" , textAlign:'center' }}>
                Volver
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid  item>
          <Card
            p={2}
            sx={{
              
              display: "flex",
              height: 100,
              width: "270px",
              cursor: "pointer",
              
              backgroundColor: "#2e6894",
              "&:hover": { backgroundColor: "#5acdbd" },
            }}
            onClick={() => getPokemons(next)}
          >
            <CardContent sx={{ display:'flex',gap:'10px', justifyContent:'center', alignItems:'center' , width:'100%' }}>
              <Typography component="div" variant="h5" sx={{ color: "white" }}>
                Siguiente
              </Typography>
              <img className="arrowImgNext" src={imgArrow} alt="" />
            </CardContent>
          </Card>
        {/* </Grid> */}
      </Grid>

      </Box>
    </Grid>
  );
};

export default FetchList;
