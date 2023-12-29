import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import api from "../services/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState, useEffect, useCallback } from "react";

const PokeModal = withReactContent(Swal);

const PokeCard = ({ item }) => {
  const path = item.url.split("/");
  const imgID = path.at(-2);
  const [pokemon, setPokemon] = useState({});

  const getPokemon = useCallback(async () => {
    try {
      const result = await api.GET(item.url);
      if (result) {
        setPokemon(result);
      }
    } catch (error) {
      console.log(error);
    }
  }, [item.url]);

  const showModal = () => {
    PokeModal.fire({
      title: pokemon.name,
      html: (
        <div className="pokeModal">
          <img src={`${api.IMG_URL}/${imgID}.png`} alt="" />
          <div className="pokeDescription">
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base Experience: {pokemon.base_experience}</p>
            <p>
              Abilities:{" "}
              {pokemon.abilities?.map((item, index) => {
                return <span key={index}>{item.ability.name}, </span>;
              })}
            </p>
            <p>
              Types:{" "}
              {pokemon.types?.map((item, index) => {
                return <span key={index}>{item.type.name}, </span>;
              })}
            </p>
          </div>
        </div>
      ),
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);
  return (
    <Card
      onClick={showModal}
      p={2}
      sx={{
        display: "flex",
        height: 100,
        cursor: "pointer",
        "&:hover": { backgroundColor: "#5acdbd", color: "white" },
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          N° {imgID}
        </Typography>
        <Typography
          sx={{ textTransform: "capitalize" }}
          component="div"
          variant="h5"
        >
          {item.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        src={`${api.IMG_URL}/${imgID}.png`}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default PokeCard;
