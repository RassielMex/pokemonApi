import { Button, Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC } from "react";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { deleteByName } from "../store/pokemon-slice";

type PokemonCardProps = {
  name: string;
  url: string;
};

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteByName(name));
  };
  return (
    <Card sx={{ width: 200 }}>
      <CardContent>
        <Stack direction={"column"} alignItems={"center"}>
          <p>{name}</p>
          <img src={url} alt={name} />
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={handleClick}
          >
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
