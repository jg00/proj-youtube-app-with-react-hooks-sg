import { useState, useEffect } from "react";
import youtube from "../apis/youtube";
import { API_KEY } from "../apis/video-hooks-api";

// console.developers.google.com > YouTube Data API v3
const KEY = API_KEY;

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  // Initial API search to return a list of videos
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // Callback - Pass down to SearchBar.  Update videos list.
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResult: 5,
        // type: 'video'
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]; // Like useState() convention. 'videos' is our state.  'search' is our functiom we can use to get a list of videos.
  // return {videos, onTermSubmit} // JS convention works as well
};

export default useVideos;
