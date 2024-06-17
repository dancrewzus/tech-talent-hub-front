import type React from "react";

import "../styles/ArticleCard.css";
import type Article from "./Article";

interface ArticleCardProps {
	article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
	return (
		<div className="article-card">
			<div className="content-img">
				<img
					src={article.url}
					alt={article.title}
					title={article.title}
					className="article-image"
				/>
			</div>

			<div className="content-inf">
				<div className="content-description">
					<div className="article-title">{article.title}</div>
					<div className="article-tags">
						{article.tags.map((tag) => (
							<span key={tag} className="article-tag">
								{tag}
							</span>
						))}
					</div>
				</div>

				<div className="article-likes">
					<span className="article-likes-count">0</span>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;

/* 
import type React from "react";
import type Article from "./Article";
import '../styles/ArticleCard.css';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card">
      <div className="content">
        <div className="article-title">{article.title}</div>
        <div className="article-tags">
          {article.tags.map((tag) => (
            <span key={tag} className="article-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="separator">
        <div className="article-likes">
          <span className="article-likes-count">0</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
*/
