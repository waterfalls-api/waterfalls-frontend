import React, { useEffect, useContext } from "react";
//context
import { WaterFallContext } from "../contexts/WaterfallContext";

function Authenticate() {
  const { addUser } = useContext(WaterFallContext);

  useEffect(() => {
    console.log("adding user");
    addUser();
  }, []);

  return (
    <>
      <h2>LOADING...</h2>
    </>
  );
}

export default Authenticate;
