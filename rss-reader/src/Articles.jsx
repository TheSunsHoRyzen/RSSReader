import React from "react";
import Feed from "./Feed";
const Articles = ({ articles }) => {
  return articles.articles.map((item) => (
    <div>
      <Feed feed={item.item} key={item.item.link} />
    </div>
  ));
};
export default Articles;
