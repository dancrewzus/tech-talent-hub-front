import type React from "react";
import { Link } from "react-router-dom";

import "../styles/ArticleView.css";
import type Article from "./Article";

interface ArticleViewProps {
	article: Article;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article }) => {
	return (
		<div className="article-view">
			<Link to="/articles" className="back-to">
				Regresar
			</Link>

			<h1 className="article-title">{article.title}</h1>

			<div className="content">
				<p className="article-area">Area: {article.area}</p>
				<p className="article-date">
					Release Date: {article.releaseDate.toLocaleDateString()}
				</p>
			</div>

			<p className="article-content">{article.content}</p>

			<p className="article-tags">
				{article.tags.map((tag) => (
					<span key={tag} className="articleTag">
						{tag}
					</span>
				))}
			</p>
		</div>
	);
};

export default ArticleView;
