import { useState } from "react";

import { type CategoryResponse } from "@/models/category";

import { Button } from "@/components/ui/button";
import {
	Table,
	TableHeader,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@/components/ui/table";

const PAGE_SIZE = 10;

const CategoryTable: React.FC<CategoryResponse> = (data) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(data.data.pagination.totalDocs / PAGE_SIZE);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const currentData = data.data.categories.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE,
	);

	return (
		<div className="relative w-full overflow-auto">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ID</TableHead>
						<TableHead>Nombre</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentData.map((row) => (
						<TableRow key={row._id}>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<div className="mt-4 flex justify-center space-x-2">
				{Array.from({ length: totalPages }, (_, index) => (
					<Button
						key={index + 1}
						onClick={() => handlePageChange(index + 1)}
						variant={currentPage === index + 1 ? "default" : "outline"}
						className={`${currentPage === index + 1 ? "border-primary bg-primary text-white" : "border-gray-300"} `}
					>
						{index + 1}
					</Button>
				))}
			</div>
		</div>
	);
};

export default CategoryTable;
