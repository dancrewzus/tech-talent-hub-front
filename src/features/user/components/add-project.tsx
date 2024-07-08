import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import type { UserInfoType } from "@/models/user-info";
import { UserInfo } from "@/models/user-info";

import { Input } from "@/components/ui/input";

interface Project {
	title: string;
	description: string;
}

function AddItem() {
	const { register } = useForm<UserInfoType>({
		resolver: zodResolver(UserInfo),
		values: {
			address: "",
			email: "",
			firstName: "",
			password: "",
			paternalSurname: "",
			profilePicture: "",
			curriculum: "",
			phoneNumber: "",
			headline: "",
			role: "",
			bio: "",
			projects: [{ title: "", description: "" }],
			tags: [{ title: "" }],
			studies: [{ title: "", description: "" }],
			newPassword: [],
		},
	});

	const [items, setItems] = useState<Project[]>([]);

	const addItem = () => {
		setItems([...items, { title: "", description: "" }]);
	};

	const handleChange = (index: number, field: keyof Project, value: string) => {
		const newItems = items.map(
			(item, i) => (i === index ? { ...item, [field]: value } : item),
			{
				...register(`projects.${index}.title` as const),
				...register(`projects.${index}.description` as const),
			},
		);
		setItems(newItems);
	};

	const removeItem = (index: number) => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	return (
		<div className="space-y-4">
			{items.map((item, index) => (
				<div key={index} className="flex flex-row items-center space-x-2">
					<Input
						value={item.title}
						onChange={(e) => handleChange(index, "title", e.target.value)}
						placeholder="Título"
						className="mr-2 w-full text-sm text-muted-foreground"
					/>

					<Input
						value={item.description}
						onChange={(e) => handleChange(index, "description", e.target.value)}
						placeholder="Descripción"
						className="ml-2 w-full text-sm text-muted-foreground"
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
				/>
				<p className="text-sm text-muted-foreground">Agregar proyecto</p>
			</div>
		</div>
	);
}

export default AddItem;
