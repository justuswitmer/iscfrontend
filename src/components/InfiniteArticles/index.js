import React, { useEffect, useState } from 'react';
import { getNext100Articles } from '../../services';
import ArticleCard from '../ArticleCard';
import { useInView } from 'react-intersection-observer';

const InfiniteArticles = () => {

  const [articles, setArticles] = useState([]);
  const [nextArticleNum, setNextArticleNum] = useState(0)
  const [lastRowRef, lastRowInView] = useInView();

  useEffect(() => {
    lastRowInView && getArticles(nextArticleNum);
    // eslint-disable-next-line
  }, [lastRowInView]);

  useEffect(() => {
    getArticles(nextArticleNum);
    // eslint-disable-next-line
  }, [])

  const getArticles = async (nextArticleNum) => {
    const articlesRes = await getNext100Articles({ nextArticle: nextArticleNum });

    console.log('articlesRes.articleData', articlesRes.data.articleData);

    // setArticles(articles => {
    //   const newData = articlesRes.data.articles;
    //   return [...articles, ...newData];
    // })
    setArticles([...articles, ...articlesRes.data.articles])
    if (articlesRes.data.articles.length !== 0) {
      setNextArticleNum(nextArticleNum + 100);
    }
  }

  const Elements = articles.map((article, i) => {
    const props = { key: i };
    (i === articles.length - 21) && (props['ref'] = lastRowRef);
    return (
      <div {...props}>
        <ArticleCard article={{ ...article, index: i }} />
      </div>
    );
  });

  return (<>{Elements}</>
  );
}

export default InfiniteArticles;