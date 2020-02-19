import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth";
//context
import { WaterFallContext } from "../contexts/WaterfallContext";

import WaterfallsCard from "./WaterFallsCard.js";
import WaterFallForm from "./WaterFallForm";
function Waterfalls() {
  const { waterFalls, setWaterFalls } = useContext(WaterFallContext);

  axiosWithAuth()
    .get("http://localhost:4000/api/")
    .then(res => {
      console.log("API auth check working");
      console.log(res);
    })
    .catch(err => {
      console.log("API auth check failed");
      console.log(err);
    });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/waterfalls")
      .then(res => {
        console.log(res);
        setWaterFalls(res.data);
      })
      .catch(err => {
        console.log("Failed GET from http://localhost:4000/api/waterfalls");
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Waterfalls List</h2>
      <WaterFallForm />
      <p>A list of sweet waterfalls</p>

      {waterFalls.map(i => (
        <WaterfallsCard name={i.name} region={i.region} country={i.country} />
      ))}
    </>
  );
}

export default Waterfalls;
