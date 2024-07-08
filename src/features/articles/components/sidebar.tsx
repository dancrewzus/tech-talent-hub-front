import { Button } from "@/components/ui/button";

export function Sidebar() {
	return (
		<div className="items-left flex flex-col">
			<p className="text-lg font-bold">Crear Articulo</p>

			<Button className="my-2 w-20 bg-white text-black">General</Button>
			<Button className="my-2 w-20 bg-white text-black">Areas</Button>
		</div>
	);
}
