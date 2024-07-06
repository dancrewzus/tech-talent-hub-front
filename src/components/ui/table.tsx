import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const Table = ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
	<table
		className={cn("min-w-full divide-y divide-gray-200", className)}
		{...props}
	/>
);
Table.displayName = "Table";

const TableHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
	<thead className={cn("bg-gray-50", className)} {...props} />
);
TableHeader.displayName = "TableHeader";

const TableBody = ({
	className,
	...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
	<tbody
		className={cn("divide-y divide-gray-200 bg-white", className)}
		{...props}
	/>
);
TableBody.displayName = "TableBody";

const TableRow = ({
	className,
	...props
}: HTMLAttributes<HTMLTableRowElement>) => (
	<tr className={cn("hover:bg-gray-100", className)} {...props} />
);
TableRow.displayName = "TableRow";

const TableCell = ({
	className,
	...props
}: HTMLAttributes<HTMLTableCellElement>) => (
	<td
		className={cn(
			"whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900",
			className,
		)}
		{...props}
	/>
);
TableCell.displayName = "TableCell";

const TableHeaderCell = ({
	className,
	...props
}: HTMLAttributes<HTMLTableCellElement>) => (
	<th
		className={cn(
			"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
			className,
		)}
		{...props}
	/>
);
TableHeaderCell.displayName = "TableHeaderCell";

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell };
