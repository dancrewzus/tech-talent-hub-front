import { sessionManager } from "@/services/session-manager";

interface Request extends Omit<RequestInit, "body"> {
	method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
	body?: RequestInit["body"] | { [key: string]: unknown };
	searchParams?: Record<string, string>;
}

export async function client(
	endpoint: string,
	{ body, searchParams, ...customConfig }: Request,
) {
	const session = sessionManager.get();
	const headers: RequestInit["headers"] = {
		accept: "application/json",
		"Content-Type": "application/json",
	};

	if (session) {
		headers.Authorization = `Bearer ${session.token}`;
	}

	const url = new URL(`/api/${endpoint}`, import.meta.env.VITE_BASE_API_URL);

	// Append search params.
	if (searchParams && searchParams) {
		for (const key in searchParams) {
			url.searchParams.set(key, searchParams[key]!);
		}
	}

	try {
		const response = await fetch(url, {
			...customConfig,
			headers: {
				...headers,
				...customConfig.headers,
			},
			body: body ? JSON.stringify(body) : undefined,
		});

		return response;
	} catch (e) {
		return null;
	}
}
