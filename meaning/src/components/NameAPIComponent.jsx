import React, { useState } from "react";
import axios from "axios";

const NameAPIComponent = () => {
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");

  const fetchNameMeaning = async () => {
    try {
      // mu650687572
      const apiKey = "mu650687572"; // Replace with your actual API key
      const response = await axios.get(
        ` https://www.behindthename.com/api/lookup.json?name=${name}&key=${apiKey}`
      );
      const nameData = response.data;
      //   setMeaning(nameData.meanings.join(", "));
      console.log(nameData);
    } catch (error) {
      console.error("Error fetching name meaning:", error);
    }
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
    </div>
  );
};

export default NameAPIComponent;
