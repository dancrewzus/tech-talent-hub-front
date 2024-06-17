import type React from "react";
import { Link } from "react-router-dom";

import "../styles/ArticleCard.css";
import type Article from "./Article";

interface ArticleCardProps {
	article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
	return (
		<Link to={`/article`}>
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
		</Link>
	);
};

export default ArticleCard;
