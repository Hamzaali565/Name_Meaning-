import axios from "axios";

export const GoogleSearchComponent = async (name) => {
  try {
    const apiKey = "AIzaSyDlycF33ROQ3WiMlrJ1b6MGbXamOQ-UxRY";
    const searchEngineId = "3196d25bf32ca4173";
    const query = `Name meaning of ${name}`;
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        query
      )}&key=${apiKey}&cx=${searchEngineId}`
    );

    const searchResults = response.data.items;
    console.log(searchResults);
    return searchResults;
  } catch (error) {
    console.error("Error fetching name meaning:", error);
    return error;
  }
};

// const searchEngineId = "3196d25bf32ca4173";
