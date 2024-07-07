import type { ColumnDef } from "@tanstack/react-table";

import type { CategoryType } from "@/models/category";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

import { CategoryRowAction } from "./category-row-action";

/** The category table columns */
export const columns: Array<ColumnDef<CategoryType>> = [
	{
		accessorKey: "_id",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="ID" />
		),
		cell: ({ row }) => row.getValue("_id"),
		enableSorting: false,
		enableHiding: false,
		size: 110,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Nombre" />
		),
		cell: ({ row }) => <div>{row.getValue("name")}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		id: "actions",
		cell: (cell) => <CategoryRowAction {...cell} />,
		enableSorting: false,
		enableHiding: false,
	},
];
