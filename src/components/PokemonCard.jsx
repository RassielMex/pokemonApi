import { Button, Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { deleteByName } from "../store/pokemon-slice";

const PokemonCard = ({ name }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteByName(name));
  };
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <p>{name}</p>
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
