import React, { useState } from "react";
import { GoogleSearchComponent } from "./GoogleSearchComponents";

const NameAPIComponent = () => {
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");

  const fetchNameMeaning = async () => {
    try {
      let response = await GoogleSearchComponent(name);
      let split = response[0].link.split(".")[1];
      console.log("response", split);
    } catch (e) {
      console.log(e);
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
