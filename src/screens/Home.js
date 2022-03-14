import React from "react";
import Cards from "../components/Cards";
import Heading from "../components/Heading";

const Home = () => {
  // home title
  React.useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Heading />
      <Cards />
    </div>
  );
};

export default Home;
