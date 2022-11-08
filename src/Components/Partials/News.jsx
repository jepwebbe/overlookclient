import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FetchHook from "../FetchHook";
import { StyledNews } from "./News.Styled";

const News = () => {
  const { apiData: news } = FetchHook("news");

  return (
    <StyledNews>
      <h2>Se vores nyheder</h2>
      <div>
        {news &&
          news.slice(-3).map((newness) => (
            <article key={newness.id}>
              <img src={newness.image} alt={newness.title} />
              <h3>
                <Link to={newness.id}>{newness.title}</Link>
              </h3>
              <p>{newness.teaser}</p>
            </article>
          ))}
      </div>
    </StyledNews>
  );
};

export default News;
