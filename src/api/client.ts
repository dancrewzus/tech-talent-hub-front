import { tokenService } from "@/services/token-service";

interface Request extends Omit<RequestInit, "body"> {
	method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
	body?: RequestInit["body"] | { [key: string]: unknown };
}

export async function client(
	endpoint: string,
	{ body, ...customConfig }: Request,
) {
	const token = tokenService.get();
	const headers: RequestInit["headers"] = {
		accept: "application/json",
		"Content-Type": "application/json",
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	try {
		const response = await fetch(
			`${import.meta.env.VITE_BASE_API_URL}/api/${endpoint}`,
			{
				...customConfig,
				headers: {
					...headers,
					...customConfig.headers,
				},
				body: body ? JSON.stringify(body) : undefined,
			},
		);

		return response;
	} catch (e) {
		return null;
	}
}
