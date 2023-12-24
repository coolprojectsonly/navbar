import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("/post/getnews", async () => {
  const options = {
    method: "GET",
    url: "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBNews",
    params: {
      recentNews: "true",
      maxItems: "10",
    },
    headers: {
      "X-RapidAPI-Key": "c1fd179e92mshf677d828559a3aep1a9fb9jsn19dac2ef030b",
      "X-RapidAPI-Host":
        "tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
