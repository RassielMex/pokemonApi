import { Stack } from "@mui/system";
import React from "react";
import PokemonCard from "./PokemonCard";

const CardList = ({ list }) => {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems={"center"}
    >
      {list?.map((item, index) => {
        return <PokemonCard name={item.name} key={index} />;
      })}
    </Stack>
  );
};

export default CardList;
