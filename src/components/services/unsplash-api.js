import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";

const API_KEY = "snzRhUCFTFgGr0RziiSbrW4le52y55gJe-v-qN-b_eo";

export const fetchedPictures = async (query, page) => {
  // try {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      query,
      page,
      per_page: 12,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });

  return response.data.results;
  // } catch (error) {
  //   console.error("Error fetching images:", error);
  //   throw error;
  // }
};
