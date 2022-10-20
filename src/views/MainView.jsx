import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import { fetchData } from "../store/pokemon-slice";

const MainView = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokemon.items);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const handleClick = () => {
    dispatch(fetchData(limit, offset));
  };

  const handleChange = (e) => {
    const id = e.target.id;
    if (id === "offset") {
      setOffset(e.target.value);
    } else {
      setLimit(e.target.value);
    }
  };

  return (
    <Container>
      <Stack
        spacing={2}
        marginBottom="1rem"
        direction="row"
        justifyContent={"center"}
      >
        <TextField
          id="limit"
          label="Limit"
          variant="outlined"
          onChange={handleChange}
          value={limit}
        />
        <TextField
          id="offset"
          label="Offset"
          variant="outlined"
          onChange={handleChange}
          value={offset}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleClick}
        >
          Get Pokemon Data
        </Button>
      </Stack>
      <CardList list={data} />
    </Container>
  );
};

export default MainView;
