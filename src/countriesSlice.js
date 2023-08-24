import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v2/all");
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default countriesSlice.reducer;
