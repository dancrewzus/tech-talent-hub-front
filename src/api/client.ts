import { sessionManager } from "@/services/session-manager";

interface Request extends Omit<RequestInit, "body"> {
	method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
	body?: RequestInit["body"] | { [key: string]: unknown };
}

export async function client(
	endpoint: string,
	{ body, ...customConfig }: Request,
) {
	const session = sessionManager.get();
	const headers: RequestInit["headers"] = {
		accept: "application/json",
		"Content-Type": "application/json",
	};

	if (session) {
		headers.Authorization = `Bearer ${session.token}`;
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
