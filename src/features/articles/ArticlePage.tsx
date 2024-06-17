import type React from "react";
import { useState } from "react";

import type Article from "./components/Article";
import ArticleCard from "./components/ArticleCard";
import ArticlesFilter from "./components/ArticlesFilter";
import "./styles/ArticlePage.css";

const articles: Article[] = [
	{
		url: "https://imagenes.muyinteresante.com/files/image_414_276/uploads/2023/08/10/64d422bfbc095.jpeg",
		title: "Artículo 1",
		area: "Tecnología",
		releaseDate: new Date("2022-01-01"),
		tags: ["react", "typescript"],
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat tenetur aperiam aliquam nobis, reprehenderit dolore consequatur velit praesentium earum?",
	},
	{
		url: "https://fotografias.lasexta.com/clipping/cmsimages02/2018/03/21/16F1682D-9314-4104-8ECB-F5838CEBF28F/98.jpg?crop=560,315,x0,y52&width=1900&height=1069&optimize=high&format=webply",
		title: "Artículo 2",
		area: "Diseño",
		releaseDate: new Date("2022-02-01"),
		tags: ["ux", "ui"],
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat tenetur aperiam aliquam nobis, reprehenderit dolore consequatur velit praesentium earum?",
	},
	{
		url: "https://images.ecestaticos.com/-qjReumQU16h-ATY_cl6bw1lZTo=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd1f%2Fc21%2Fcca%2Fd1fc21ccaabd96400211f7746115e9ad.jpg",
		title: "Artículo 3",
		area: "Economia",
		releaseDate: new Date("2024-03-10"),
		tags: ["Bolsa", "Aumento"],
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat tenetur aperiam aliquam nobis, reprehenderit dolore consequatur velit praesentium earum?",
	},
];

const ArticlesPage = () => {
	const [filteredArticles, setFilteredArticles] = useState(articles);

	const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedArea = event.target.value;
		if (selectedArea === "all") {
			setFilteredArticles(articles);
		} else {
			setFilteredArticles(
				articles.filter((article) => article.area === selectedArea),
			);
		}
	};

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = event.target.value.toLowerCase();
		setFilteredArticles(
			articles.filter((article) =>
				article.title.toLowerCase().includes(searchTerm),
			),
		);
	};

	const handleTagsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedTag = event.target.value;
		if (selectedTag === "all") {
			setFilteredArticles(articles);
		} else {
			setFilteredArticles(
				articles.filter((article) => article.tags.includes(selectedTag)),
			);
		}
	};

	const handleReleaseDateChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const selectedDate = event.target.value;
		if (selectedDate === "all") {
			setFilteredArticles(articles);
		} else {
			const selectedDateObject = new Date(selectedDate);
			setFilteredArticles(
				articles.filter(
					(article) =>
						article.releaseDate.getDate() === selectedDateObject.getDate(),
				),
			);
		}
	};

	return (
		<div className="articles-page">
			<div className="articles-header">
				<div className="articles-title">Articles</div>
				<ArticlesFilter
					onAreaChange={handleAreaChange}
					onTitleChange={handleTitleChange}
					onTagsChange={handleTagsChange}
					onReleaseDateChange={handleReleaseDateChange}
				/>
			</div>
			<div className="articles-grid">
				{filteredArticles.map((article, index) => (
					<ArticleCard key={index} article={article} />
				))}
			</div>
		</div>
	);
};

export default ArticlesPage;
