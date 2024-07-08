import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";

import { Main } from "@/components/main";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { TextSeparator } from "../auth/components/text-separator";

const profileData = {
	name: "Harry Potter",
	username: "hpotter",
	email: "hpotter@howarts.magic",
	phone: "123456789",
	bio: "Nacido en Puerto Ordaz, Estado Bolívar, siempre ha sido mi sueño trabajar en Apple",
	avatarUrl:
		"https://c0.klipartz.com/pngpicture/782/114/gratis-png-icono-de-perfil-icono-de-usuario-en-un-circulo-thumbnail.png",
	curriculum:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae.",
	projects: [
		{ name: "Proyecto 1", description: "Descripción del proyecto 1" },
		{ name: "Proyecto 2", description: "Descripción del proyecto 2" },
	],
	formation: [
		{ name: "Formación 1", description: "Descripción de Formación 1" },
		{ name: "Formación 2", description: "Descripción de Formación 2" },
	],
	tags: ["JavaScript", "React js", "Nest js", "Node.js"],
};

export function AboutMePage() {
	const [profile] = useState(profileData);
	return (
		<Main className="flax-col flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-lg space-y-8">
				<h1 className="text-3xl font-semibold md:text-left">Acerca de mi</h1>

				<TextSeparator> </TextSeparator>
				<div className="justify-content flex flex-row">
					<Avatar>
						<AvatarImage
							className="gap-10px mb-0.5 h-20 w-20 rounded-full object-cover shadow-md"
							src={profile.avatarUrl}
							alt={`${profile.name} avatar`}
						/>
					</Avatar>
					<h1 className="ml-3 mt-5 text-2xl font-semibold">
						{profile.username}
					</h1>
					<Button className="ml-10 mt-5" variant="outline">
						Descargar CV
					</Button>
				</div>
				<br />
				<strong>Disponible para contratar</strong>
				<div className="flex flex-row rounded-lg border p-4">
					<p className="mr-3 text-sm font-bold">Email</p>
					<p className="text-sm text-muted-foreground">{profile.email}</p>
				</div>

				<div className="flex flex-row rounded-lg border p-4">
					<p className="mr-3 text-sm font-bold">Tlf</p>
					<p className="text-sm text-muted-foreground">{profile.phone}</p>
				</div>

				<div className="flex flex-col rounded-lg border p-4">
					<p className="mr-3 text-sm font-bold">Bio</p>
					<p className="mt-1 text-sm text-muted-foreground">{profile.bio}</p>
				</div>

				<TextSeparator> </TextSeparator>
				<p className="mr-3 text-sm font-bold">Etiquetas</p>
				<div>
					{profile.tags.map((tag, index) => (
						<Badge
							key={index}
							variant="outline"
							className="mr-1 mt-1 rounded-lg border border-black text-muted-foreground md:text-base"
						>
							{tag}
						</Badge>
					))}
				</div>
				<TextSeparator> </TextSeparator>

				<h1 className="text-3xl font-semibold md:text-left">Ver más</h1>

				<div className="space-y-4">
					{profile.formation.map((formation, index) => (
						<div key={index} className="rounded-lg border p-4">
							<h4 className="text-sm font-bold">{formation.name}</h4>
							<p className="mr-3 text-sm text-muted-foreground">
								{formation.description}
							</p>
						</div>
					))}
				</div>

				<div className="space-y-4">
					{profile.projects.map((project, index) => (
						<div key={index} className="rounded-lg border p-4">
							<h4 className="text-sm font-bold">{project.name}</h4>
							<p className="mr-3 text-sm text-muted-foreground">
								{project.description}
							</p>
						</div>
					))}
				</div>

				<TextSeparator> </TextSeparator>
			</div>
		</Main>
	);
}
