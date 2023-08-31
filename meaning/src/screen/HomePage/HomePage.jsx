import React, { useState } from "react";
import Search from "../../components/Search/Search";
import Container from "../../components/Container/Container";
import axios from "axios";
import { GoogleSearchComponent } from "../../components/GoogleSearchComponents";

{
}
const HomePage = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  let baseUrl = "";
  if (window.location.href.split(":")[0] === "http") {
    baseUrl = "http://localhost:3001";
  }
  const getData = async (link) => {
    console.log("link", link);
    try {
      let response = await axios.get(`${baseUrl}/scrape?link=${link}
      `);
      console.log(response);
      setText(response.data.meaning);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNameMeaning = async (e) => {
    e.preventDefault();
    try {
      let response = await GoogleSearchComponent(name);
      let link = response[0].link;
      //   console.log(link);
      let split = link.split(".")[1];
      if (split == "wikipedia") {
        let dates = await getData(link);
      } else {
        console.log("something else");
      }
      console.log("response", split);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="NewMergeContainer">
      <div className="">
        {/* <h1 className="flex justify-center my-10 text-6xl font-bold">
          Name Definer
        </h1> */}
        <div className="my-5">
          <Search
            onChange={(e) => {
              setName(e.target.value);
              // onsubmit = { getData };
            }}
            onclick={fetchNameMeaning}
            //   onkeypress={fetchNameMeaning}
            onSubmit={fetchNameMeaning}
          />
        </div>
        {text !== "" ? (
          <div>
            <Container text={text} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
