import handshakeImage from "@/assets/handshake.jpg";

export function Hero() {
	return (
		<section className="relative h-[29rem] overflow-clip sm:rounded-md">
			<div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/40 px-6 py-4 text-white">
				<h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
					Deja que los empleos vengan a ti
				</h1>

				<p className="text-lg sm:text-center sm:text-2xl">
					Encuentra trabajos únicos en un sistema inteligente y moderno
				</p>
			</div>

			<img
				src={handshakeImage}
				height={460}
				className="aspect-video h-full w-full object-cover"
			/>
		</section>
	);
}
