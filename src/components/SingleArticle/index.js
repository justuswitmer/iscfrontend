import { useLocation, useMatch, useParams } from "react-router-dom"

const SingleArticle = () => {
  const { slug } = useParams();
  const { state: article } = useLocation();

  console.log(article);

  return (
    <div id={slug}>
      <h2 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
      <span dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
    </div>
  )
}

export default SingleArticle