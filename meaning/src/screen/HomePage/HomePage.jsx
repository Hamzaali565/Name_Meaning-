import React, { useState } from "react";
import Search from "../../components/Search/Search";
import Container from "../../components/Container/Container";
import axios from "axios";
import { GoogleSearchComponent } from "../../components/GoogleSearchComponents";
import Loader from "../../components/Animation/Loader";
import Container2 from "../../components/Container/Container2";
import Error from "../../components/Error/Error";

{
}
const HomePage = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [moreDetail, setMoreDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  let baseUrl = "";
  if (window.location.href.split(":")[0] === "http") {
    baseUrl = "http://localhost:3001";
  }
  const getData = async (link, data) => {
    console.log("link", link);
    try {
      let response = await axios.get(`${baseUrl}/scrape?link=${link}
      `);
      console.log(response);
      setErrorMessage("");
      setText(response.data.meaning);
      console.log("data", data);
      setMoreDetails(data);
      setLoader(false);
    } catch (error) {
      console.log("error", error.message);
      // console.log("data", data);
      setErrorMessage("Try Again With Correct Spelling");
      setLoader(false);
    }
  };
  console.log(errorMessage);
  const fetchNameMeaning = async (e) => {
    e.preventDefault();
    setLoader(true);
    let link = "";
    try {
      setMoreDetails(null);
      setText("");
      let response = await GoogleSearchComponent(name);
      console.log("res", response);
      let data = await response.splice(1, 3);
      link = response[0].link;

      let split = link.split(".")[1];
      if (split == "wikipedia") {
        let dates = await getData(link, data);
      } else {
        await getData(link, data);
      }
      console.log("response", split);
    } catch (e) {
      console.log(e);
      getData(link);
    }
  };
  const GotoWeb = (item) => {
    window.open(item.link);
  };

  return (
    <div className="overflow-hidden adiv">
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
        <div>
          {loader == true ? (
            <Loader />
          ) : (
            <dir>
              {text !== "" ? (
                <div>
                  <Container text={text} />
                </div>
              ) : null}
              <div>
                <h3 className="text-3xl font-bold text-pink-500 text-center pt-5">
                  {text.length == "" ? null : "More Results"}
                </h3>
                {moreDetail &&
                  moreDetail.map((eachitem, i) => (
                    <Container2
                      text={eachitem.snippet}
                      onClick={() => {
                        GotoWeb(eachitem);
                      }}
                    />
                  ))}
                {/* <Container2 /> */}
              </div>
              <div>
                {errorMessage !== "" ? <Error text={errorMessage} /> : null}
              </div>
            </dir>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
