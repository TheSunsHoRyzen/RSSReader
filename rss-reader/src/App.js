import axios from "axios";
import "./index.css";
import Articles from "./Articles";
import { useEffect, useState } from "react";
function App() {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h2 className="font-semibold text-center m-5">RSS Feed</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {articles.map((feed, id) => (
          <div className="w-3/4 max-w-lg border-2 mx-auto p-5 rounded-xl ">
            {/* {console.log(feed)} */}
            <div className="bg-blue-900 rounded-xl flex flex-col items-center py-4 px-6 mb-5">
              <img
                alt="RSS Feed header"
                width={250}
                src={feed.logo}
                className="rounded-xl border-black border-solid border-4"
              />
            </div>
            <h1 className="flex items-center justify-center text-center m-4">
              {feed.name}
            </h1>
            <Articles articles={feed} key={feed.articles[0].item.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
