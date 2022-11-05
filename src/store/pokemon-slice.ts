import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";
import { RawResponse } from "../types/RawResponse";
import { AppDispatch } from "./store";

export interface PokemonState {
  items: Pokemon[];
}

const initialState: PokemonState = {
  items: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
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

export const fetchData = (limit: Number, offset: Number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}"`
      );
      const results: RawResponse[] = res.data.results;
      //console.log(results);

      const arrData = await Promise.all(
        results.map(async (result) => {
          const { data } = await axios.get(result.url);
          return { name: result.name, sprite: data.sprites.front_default };
        })
      );
      console.log(arrData);

      dispatch(replace(arrData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { replace, deleteByName } = pokemonSlice.actions;
export default pokemonSlice.reducer;
