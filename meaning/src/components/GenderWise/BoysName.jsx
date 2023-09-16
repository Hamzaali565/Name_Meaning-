import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Animation/Loader";
import dotLoader from "../../components/Animation/data3.json";
import Button from "../Button/Button";
import Error from "../Error/Error";
const BoysName = () => {
  const [BoysName, setBoysName] = useState([]);
  const [loader, setLoader] = useState(false);
  const [toogle, setToggle] = useState(false);
  const [changeMode, setChaneMode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let baseUrl = "";
  if (window.location.href.split(":")[0] === "http") {
    baseUrl = "http://localhost:3001";
  }
  useEffect(() => {
    // CallNaw();
    getAllData();
  }, [!toogle]);
  // const CallNaw = async () => {
  //   setLoader(true);
  //   try {
  //     let response = await axios.get(
  //       `https://api.api-ninjas.com/v1/babynames?gender=boy`,
  //       {
  //         headers: {
  //           "X-Api-Key": "EkXE/+YcRIeRi3kB6rs0fw==jRmJIwSWLPNvwDJQ",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     let nre = await response.data.map((item) => ({
  //       name: item,
  //     }));
  //     setBoysName((prev) => [...prev, ...nre]);
  //     setLoader(false);
  //     console.log(BoysName);
  //   } catch (error) {
  //     console.log(error);
  //     setLoader(false);
  //   }
  // };

  const NameCall = async (text) => {
    console.log(baseUrl);
    setBoysName(null);
    setLoader(true);

    try {
      setErrorMessage("");
      const response = await axios.get(
        `${baseUrl}/api/v1/genderWiseNames?category=${text}&gender=Male`
      );
      let data = response.data.data;
      setBoysName(data);
      console.log(data);
      setLoader(false);
      setChaneMode("ok");
    } catch (error) {
      console.log(error);
      setLoader(false);
      if (error.message === "Network Error") {
        setErrorMessage("No Internet Connection");
        return;
      } else setErrorMessage(error.response.data.message);
    }
  };

  const getAllData = async () => {
    setLoader(true);
    setErrorMessage("");
    try {
      let response = await axios.get(
        `${baseUrl}/api/v1/getallNames?gender=Male&page=${BoysName.length}`
      );
      let datad = response.data.data;
      setBoysName((prev) => [...prev, ...datad]);
      // setBoysName(datad);

      console.log(datad);
      setLoader(false);
    } catch (error) {
      console.log(error.message);
      setLoader(false);
      if (error.message === "Network Error") {
        setErrorMessage("No Internet Connection");
        return;
      } else setErrorMessage(error.response.data.message);
    }
  };

  const ScrollToDiv3 = async () => {
    const targetDiv = document.getElementById("scrollButton");
    await targetDiv.scrollIntoView({ behavior: "smooth" });
    setToggle(!toogle);
    // await CallNaw();
  };

  return (
    <div>
      <div className="flex justify-center mt-3 space-x-3">
        <Button
          text={"Muslim"}
          onClick={() => {
            NameCall("Muslim");
          }}
        />
        <Button
          text={"Hindu"}
          onClick={() => {
            NameCall("Hindu");
          }}
        />
        <Button
          text={"Christian"}
          onClick={() => {
            NameCall("Christian");
          }}
        />
      </div>
      <div className="flex justify-center">
        <table bgcolor="black" style={{ marginTop: "20px" }}>
          <tr className="bg-pink-300">
            <th className="w-32 border-4 border-pink-700 font-extrabold text-xl sm:w-64 md:w-80 lg:w-64 ">
              Name
            </th>
            <th className="w-32 border-4 border-pink-700 font-extrabold text-xl sm:w-64 md:w-80 lg:w-64 ">
              Meaning
            </th>
            <th className="w-32 border-4 border-pink-700 font-extrabold text-xl sm:w-64 md:w-80 lg:w-64 ">
              Gender
            </th>
          </tr>
          {BoysName &&
            BoysName.map((eachItem, i) => (
              <tr className="bg-pink-200" key={i}>
                <td className="w-32 border-2 font-semibold border-pink-700 text-center sm:w-64">
                  {eachItem.name}
                </td>
                <td className="w-32 border-2 font-semibold border-pink-700 text-center sm:w-64">
                  {eachItem.meaning}
                </td>
                <td className="w-32 border-2 font-semibold border-pink-700 text-center sm:w-64">
                  {eachItem.gender}
                </td>
              </tr>
            ))}
        </table>
      </div>
      <div
        className="font-bold text-center mt-2 cursor-pointer text-blue-500 underline"
        onClick={ScrollToDiv3}
      >
        {loader === false ? null : (
          <Loader AniData={dotLoader} height={"100px"} />
        )}
      </div>
      <div
        className="font-bold text-center mt-2 cursor-pointer text-blue-500 underline"
        onClick={ScrollToDiv3}
      >
        {errorMessage !== "" ? (
          <Error text={errorMessage} />
        ) : changeMode === "ok" ? null : (
          "See More"
        )}
      </div>

      <div className="h-4"></div>
      <div className="h-4" id="scrollButton"></div>
    </div>
  );
};

export default BoysName;
