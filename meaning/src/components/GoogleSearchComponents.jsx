import React, { useState } from "react";
import axios from "axios";

const GoogleSearchComponent = () => {
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");
  const [data, setData] = useState([]);
  const fetchNameMeaning = async () => {
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
      if (searchResults.length > 0) {
        const firstResult = searchResults[0];
        const link = firstResult.link;

        // Fetch the actual webpage content
        const webpageResponse = await axios.get(`${link}`);
        console.log("webpageResponse", link);
        const webpageContent = webpageResponse.data;

        // Extract meaning from the webpage content using regex, DOM parsing, or other methods
        const meaning = extractMeaningFromWebpage(webpageContent);

        setMeaning(meaning);
      } else {
        setMeaning("No results found.");
      }
    } catch (error) {
      console.error("Error fetching name meaning:", error);
    }
  };

  // This function should be implemented to extract the meaning from the webpage content
  const extractMeaningFromWebpage = (webpageContent) => {
    // Implement your logic to extract the meaning from the webpage content
    // You might use regular expressions, DOM parsing, or other methods here
    return "Meaning extracted from webpage";
  };

  return (
    <div>
      <h1>Name Meaning Finder</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <button onClick={fetchNameMeaning}>Find Meaning</button>
      <p>Meaning: {meaning}</p>
      <div>
        {data.length > 0 && data.map((detail, i) => <div>{detail.detail}</div>)}
      </div>
    </div>
  );
};

export default GoogleSearchComponent;

const searchEngineId = "3196d25bf32ca4173";
