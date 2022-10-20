import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    items: [],
  },
  reducers: {
    replace: (state, action) => {
      state.items = action.payload;
    },
    deleteByName: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => {
        return item.name !== name;
      });
    },
  },
});

export const fetchData = (limit, offset) => {
  return (dispatch) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}"`)
      .then((res) => {
        //console.log(res);
        const results = res.data.results;
        //console.log(results);
        dispatch(pokemonSlice.actions.replace(results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const { replace, deleteByName } = pokemonSlice.actions;
export default pokemonSlice.reducer;
