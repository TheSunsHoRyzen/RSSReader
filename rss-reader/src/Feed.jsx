import React from "react";

const Feed = ({ feed }) => {
  let formatted = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  let articleDate = new Date(feed.pubDate).toLocaleDateString(
    "en-US",
    formatted
  );

  return (
    <div className="p-1 ml-5 mb-3">
      <h4 className="font-bold">{feed.title}</h4>
      <h5 className="italic">{articleDate}</h5>
      <h5>{feed.content}</h5>
      <a
        href={feed.link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-red-700"
      >
        {feed.link}
      </a>
      <br></br>
    </div>
  );
};

export default Feed;
