import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import { type CategoryResponse } from "@/models/category";

import { Button } from "@/components/ui/button";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableCell,
	TableHeaderCell,
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
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>Name</TableHeaderCell>
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

			<Dialog.Root>
				<Dialog.Trigger asChild>
					<Button>Open Dialog</Button>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 bg-black/80" />
					<Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 shadow-lg">
						<Dialog.Title className="text-lg font-semibold">
							Table in Dialog
						</Dialog.Title>
						<Dialog.Description className="mt-2 text-sm text-gray-600">
							This is a table inside a dialog.
						</Dialog.Description>
						<div>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHeaderCell>ID</TableHeaderCell>
										<TableHeaderCell>Name</TableHeaderCell>
										<TableHeaderCell>Email</TableHeaderCell>
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
						<Dialog.Close asChild>
							<Button>Close</Button>
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
};

export default CategoryTable;
