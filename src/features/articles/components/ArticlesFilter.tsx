import type React from "react";
import type { ChangeEvent } from "react";

import "../styles/ArticlesFilter.css";

interface ArticlesFilterProps {
	onAreaChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onTagsChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	onReleaseDateChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const ArticlesFilter: React.FC<ArticlesFilterProps> = ({
	onAreaChange,
	onTitleChange,
	onTagsChange,
	onReleaseDateChange,
}) => {
	return (
		<div className="articles-filters">
			<div className="articles-filter">
				<label htmlFor="area-filter">Area:</label>
				<select id="area-filter" onChange={onAreaChange}>
					<option value="all">All</option>
					{/* area options */}
				</select>
			</div>
			<div className="articles-filter">
				<label htmlFor="title-filter">Title:</label>
				<input
					id="title-filter"
					type="text"
					placeholder="Search by title"
					onChange={onTitleChange}
				/>
			</div>
			<div className="articles-filter">
				<label htmlFor="tags-filter">Tags:</label>
				<select id="tags-filter" onChange={onTagsChange}>
					<option value="all">All</option>
					{/* tag options */}
				</select>
			</div>
			<div className="articles-filter">
				<label htmlFor="release-date-filter">Release Date:</label>
				<select id="release-date-filter" onChange={onReleaseDateChange}>
					<option value="all">All</option>
					{/* release date options */}
				</select>
			</div>
		</div>
	);
};

export default ArticlesFilter;
