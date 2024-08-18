import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";

const feedURLs = [
  "http://rss.cnn.com/rss/money_news_economy.rss",
  "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
  "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
];
/**
 * Idea:
 * Create a separate array for feed names and add it to object sent to frontend. Also, include image link in object to render in frontend.
 */
const feedNames = [
  "CNN Economy",
  "NY Times Technology",
  "BBC Science and Environment",
];

const feedLogos = [
  "https://ssrs.com/wp-content/uploads/CNN_2024.png",
  "https://help.nytimes.com/hc/theming_assets/01HZPCK5BKMK9ZRNEE1Y6J1PHW",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfMKX2yDo_gE-BvlC3RVajf0oN07KFsBnsg&s",
];

const parser = new RSSParser();
let articles = [];
let result = [];
const parse = async (url) => {
  const feed = await parser.parseURL(url);
  feed.items.forEach((item) => {
    // console.log(`${Object.keys(item)}\n\n`);
    articles.push({ item });
  });
};
for (let i = 0; i < feedURLs.length; i++) {
  articles = [];
  await parse(feedURLs[i]);
  const logo = feedLogos[i];
  const name = feedNames[i];
  result.push({ logo: logo, name: name, articles });
}
console.log();
let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(result);
});

const server = app.listen("4000", () => {
  console.log("App is listening at http://localhost:4000");
});

export default server;
