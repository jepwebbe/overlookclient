import React from "react";
import News from "../Partials/News";
import SelectedRooms from "../Partials/SelectedRooms";
import { StyledHome } from "./Home.Styled";

const Home = () => {
  return (
    <StyledHome>
        <News />
        <SelectedRooms />
    </StyledHome>
  );
};

export default Home;
