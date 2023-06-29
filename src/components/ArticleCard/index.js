import dayjs from "dayjs";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {

  return (
    <Link to={`/article/${article.slug}`} state={article} className="article-card">
      <div key={article.id}>
        <h2><span style={{ marginRight: "5px" }}>{article.index + 1}</span><span dangerouslySetInnerHTML={{ __html: article.title.rendered }} /></h2>
        <p><b>Published:</b> {dayjs(article.date).format("MMMM DD, YYYY")}</p>
        {article.acf.authors.length > 0 &&
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4 style={{ marginRight: "5px" }}>Author{article.acf.authors.length > 1 ? "s" : ""}:</h4>
            {article.acf.authors.map(author => (
              <p key={author.post_title} style={{ marginRight: "5px" }}>{author.post_title}</p>
            ))}
          </div>
        }
      </div>
    </Link>
  )
}

export default ArticleCard;