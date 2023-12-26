import React from "react";
import "../styles/Articles.css";
import ArticlesBlock from "./ArticlesBlock";

const Articles: React.FC = () =>{
    const articlesHeaderText = "Check out our latest article"
    const exampleArticles = [
        {
          image: require("../assets/images/article-image.png"),
          title: "Disease detection, check up in the laboratory",
          subtitle: "In this case, the role of the health laboratory is very important to doa disease detection...",
          onClick: () => console.log("Clicked on Article 1"),
        },
        {
          image: require("../assets/images/article-image-2.png"),
          title: "Herbal medicines that are safe for consumption",
          subtitle: "Herbal medicine is very widely used at this time because of its very good for your health...",
          onClick: () => console.log("Clicked on Article 2"),
        },
        {
          image: require("../assets/images/article-image-3.png"),
          title: "Natural care for healthy facial skin",
          subtitle: "A healthy lifestyle should start from now and also for your skin health.There are some...",
          onClick: () => console.log("Clicked on Article 2"),
        },
        
      ];
    
      const exampleAdditionArticles = [
        {
          image: require("../assets/images/article-image.png"),
          title: "Disease detection, check up in the laboratory",
          subtitle: "In this case, the role of the health laboratory is very important to doa disease detection...",
          onClick: () => console.log("Clicked on Article 1"),
        },
        {
          image: require("../assets/images/article-image-2.png"),
          title: "Herbal medicines that are safe for consumption",
          subtitle: "Herbal medicine is very widely used at this time because of its very good for your health...",
          onClick: () => console.log("Clicked on Article 2"),
        },
        {
          image: require("../assets/images/article-image-3.png"),
          title: "Natural care for healthy facial skin",
          subtitle: "A healthy lifestyle should start from now and also for your skin health.There are some...",
          onClick: () => console.log("Clicked on Article 2"),
        },
        
      ];

    return(
        <div className="Articles">
            <div className="Articles-header">
                <span className="Articles-header-text">{articlesHeaderText}</span>
                <div className="Articles-header-line"></div>
            </div>
            <ArticlesBlock articles={exampleArticles} additionalArticles={exampleAdditionArticles}/>
        </div>
    )
}

export default Articles;
export{}