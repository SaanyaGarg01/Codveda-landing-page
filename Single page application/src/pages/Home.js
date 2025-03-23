import React, { useContext } from "react";
import { AppContext } from "../context";

const Home = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>{state}</p>
    </div>
  );
};

export default Home;
