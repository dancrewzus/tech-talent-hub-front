import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { UserInfo, type UserInfoType } from "@/models/user-info";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AddFormation from "./add-formation";
import AddItem from "./add-project";

export function ExperienceForm() {
	const [curriculum, setCurriculum] = useState<string | null>(null);
	const {
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<UserInfoType>({
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

	const handleCv = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setCurriculum(reader.result as string);
			};
			reader.readAsDataURL(file);
			console.log(curriculum);
		}
	};

	const onSubmit: SubmitHandler<UserInfoType> = async () => {
		console.log(errors);
	};

	return (
		<form
			method="post"
			className="grid w-full space-y-6"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="grid w-full items-center">
				<Label
					htmlFor="file"
					className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					CV
				</Label>
				<Input id="cvFile" type="file" onChange={handleCv} />
			</div>

			<Label
				htmlFor="tag"
				className="peer-disabled:opacity-70px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
			>
				Estudios
			</Label>
			<AddFormation />

			<Label
				htmlFor="tag"
				className="peer-disabled:opacity-70px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
			>
				Proyectos
			</Label>
			<AddItem />

			<div className="h-6 w-6 w-full">
				<Button disabled={isSubmitting}>
					{isSubmitting ? <Loader2 className="mr-2 animate-spin" /> : null}

					<span>Guardar cambios</span>
				</Button>
			</div>
		</form>
	);
}
