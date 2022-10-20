import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon-slice";

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
