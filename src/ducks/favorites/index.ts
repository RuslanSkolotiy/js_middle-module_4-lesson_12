import { favoritesSlice } from "./slice"

export { selectFavorites } from "./slice"
export const favoritesReducer = favoritesSlice.reducer;
export const favoritesReducerName = favoritesSlice.name;
