import axios from "axios";
import React, { useState } from "react";

const Boys = () => {
  const [BoysName, setBoysName] = useState([]);
  const CallNaw = async () => {
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

      console.log(BoysName);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <table bgcolor="black">
          <tr className="bg-pink-300">
            <th className="w-32 border-4 border-pink-700 font-extrabold text-xl sm:w-64 md:w-80 lg:w-96 ">
              Name
            </th>
            <th className="w-32 border-4 border-pink-700 font-extrabold text-xl sm:w-64 md:w-80 lg:w-96 ">
              Gender
            </th>
          </tr>
          <tr className="bg-pink-300">
            <td className="w-32 border-2 font-semibold border-pink-700 text-center sm:w-64">
              Hamza
            </td>
            <td className="w-32 border-2 font-semibold border-pink-700 text-center sm:w-64">
              Male
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Boys;
