import { CirclePlus, X } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

function AddItem() {
	const [items, setItems] = useState<string[]>([]);

	const addItem = () => {
		setItems([...items, ""]);
	};

	const removeItem = (index: number) => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	const handleChange = (index: number, value: string) => {
		const newItems = [...items];
		newItems[index] = value;
		setItems(newItems);
	};

	return (
		<div className="space-y-4">
			{items.map((item, index) => (
				<div key={index} className="flex items-center">
					<Input
						key={index}
						value={item}
						onChange={(e) => handleChange(index, e.target.value)}
						placeholder="Ingresa un ítem"
					/>
					<X
						type="button"
						className="cursor-pointer"
						onClick={() => removeItem(index)}
					/>
				</div>
			))}
			<div className="flex flex-row">
				<CirclePlus
					type="button"
					className="items-left mr-2"
					onClick={addItem}
				/>{" "}
				<p className="text-sm text-muted-foreground">Añade etiquetas</p>
			</div>
		</div>
	);
}

export default AddItem;
