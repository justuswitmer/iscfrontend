import axios from "axios";
import express from "express";
import cors from 'cors';

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post("/infinite-articles", async (req, res) => {

  const { body: { nextArticle } } = req;
  let articleData = "";

  const articlesData = await axios.get(`https://www.thegospelcoalition.org/wp-json/wp/v2/article?offset=${nextArticle}&per_page=100`);
  const numOfArticles = Number(articlesData.headers["x-wp-total"]);

  res.json({ articles: articlesData.data, numOfArticles: numOfArticles, articleData: articleData });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});