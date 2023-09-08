import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Animation/Loader";
import dotLoader from "../../components/Animation/data3.json";
const BoysName = () => {
  const [BoysName, setBoysName] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    CallNaw();
  }, []);
  const CallNaw = async () => {
    setLoader(true);
    try {
      let response = await axios.get(
        `https://api.api-ninjas.com/v1/babynames?gender=boy`,
        {
          headers: {
            "X-Api-Key": "EkXE/+YcRIeRi3kB6rs0fw==jRmJIwSWLPNvwDJQ",
            "Content-Type": "application/json",
          },
        }
      );
      let nre = await response.data.map((item) => ({
        name: item,
      }));
      setBoysName((prev) => [...prev, ...nre]);
      setLoader(false);
      console.log(BoysName);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  const ScrollToDiv3 = async () => {
    const targetDiv = document.getElementById("scrollButton");
    await targetDiv.scrollIntoView({ behavior: "smooth" });
    await CallNaw();
  };

  return (
    <div>
      <div className="flex justify-center">
        <table bgcolor="black" style={{ marginTop: "20px" }}>
          <tr className="bg-pink-300">
            <th className="w-32 border-4 border-pink-700 font-extrabold text-xl sm:w-64 md:w-80 lg:w-96 ">
              Name
            </th>
            <th className="w-32 border-4 border-pink-700 font-extrabold text-xl sm:w-64 md:w-80 lg:w-96 ">
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
                  Male
                </td>
              </tr>
            ))}
        </table>
      </div>
      <div
        className="font-bold text-center mt-2 cursor-pointer text-blue-500 underline"
        onClick={ScrollToDiv3}
      >
        {loader === false ? (
          "See More"
        ) : (
          <Loader AniData={dotLoader} height={"100px"} />
        )}
      </div>
      <div className="h-4"></div>
      <div className="h-4" id="scrollButton"></div>
    </div>
  );
};

export default BoysName;
