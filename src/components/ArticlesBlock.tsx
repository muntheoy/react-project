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

  return (
    <div >
      <img src={require("../assets/images/articles-element-1.png")} alt="" style={{position: 'absolute', zIndex: '-1', top: '-15%', right: '0'}}/>
      <img src={require("../assets/images/articles-element-2.png")} alt="" style={{position: 'absolute', zIndex: '-1', top: '-5%', left: '12%', width: '10%'}}/>
      <div className="ArticlesBlock">
        {mainArticles.map((article, index) => (
          <ArticlesCard key={index} {...article} />
        ))}
      </div>
      {showMore && (
        <div className="AdditionalArticles">
          {additionalArticles.map((article, index) => (
            <ArticlesCard key={index} {...article} />
          ))}
        </div>
      )}
      <button className="ShowMoreButton" onClick={toggleShowMore}>
        {showMore ? "Show Less" : "View all"}
      </button>
    </div>
  );
};

export default ArticlesBlock;
