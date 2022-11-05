import { Stack } from "@mui/system";
import React from "react";
import { Pokemon } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

type CardListProps = {
  list: Pokemon[];
};

const CardList = ({ list }: CardListProps) => {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems={"center"}
    >
      {list?.map((item, index) => {
        return <PokemonCard name={item.name} key={index} url={item.sprite} />;
      })}
    </Stack>
  );
};

export default CardList;
