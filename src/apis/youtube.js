import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

/*
  Starting with release v0.19.0 there is a bug that fails to merge the parameters from 
  the config instance.

  const KEY and params: {} had to be moved to App.js
*/
