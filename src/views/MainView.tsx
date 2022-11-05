import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import CardList from "../components/CardList";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchData } from "../store/pokemon-slice";

const MainView = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.pokemon.items);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const handleClick: MouseEventHandler = () => {
    dispatch(fetchData(limit, offset));
  };

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const id = e.target.id;
    if (id === "offset") {
      setOffset(parseInt(e.currentTarget.value));
    } else {
      setLimit(parseInt(e.currentTarget.value));
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
