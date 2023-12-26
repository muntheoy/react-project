import React, { useState } from "react";
import "../styles/ArticlesBlock.css";
import ArticlesCard from "./ArticlesCard";

interface IArticlesCard {
  image: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}

interface IArticlesBlock {
  articles: IArticlesCard[];
  additionalArticles: IArticlesCard[];
}

const ArticlesBlock: React.FC<IArticlesBlock> = ({
  articles: mainArticles,
  additionalArticles,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const illustrationFirst = require("../assets/images/articles-element-1.png");
  const illustrationSecond = require("../assets/images/articles-element-2.png");

  return (
    <div style={{position: 'relative'}}>
      <img className="ArticlesBlock-illustration-first" src={illustrationFirst} alt="" />
      <img className="ArticlesBlock-illustration-second" src={illustrationSecond} alt="" />
      <div className="ArticlesBlock">
        {mainArticles.map((article, index) => (
          <ArticlesCard key={index} {...article} />
        ))}
      </div>
      {showMore && (
        <div className="ArticlesBlock-additionalArticles">
          {additionalArticles.map((article, index) => (
            <ArticlesCard key={index} {...article} />
          ))}
        </div>
      )}
      <button className="ArticlesBlock-button" onClick={toggleShowMore}>
        {showMore ? "Hide" : "View all"}
      </button>
    </div>
  );
};

export default ArticlesBlock;
