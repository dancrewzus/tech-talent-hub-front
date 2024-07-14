import { isErrorResponse } from "@/models/error-response";
import { Session } from "@/models/session";
import type { UserCredentialsType } from "@/models/user-credentials";
import type { UserRegisterType } from "@/models/user-register";

import { sessionManager } from "@/services/session-manager";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const authApi = {
	/**
	 * Attempts to log an user into the hub.
	 *
	 * @param userCredentials - The user credentials to log in.
	 *
	 * @returns A promise that resolves to a session if login is successful.
	 * Otherwise an error response or null.
	 */
	async login(userCredentials: UserCredentialsType) {
		const response = await client("v1/auth/login", {
			method: "POST",
			body: userCredentials,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Session).safeParse(json);

		if (parsed.success && !isErrorResponse(parsed.data)) {
			sessionManager.set(parsed.data);
		}

		return parsed.success ? parsed.data : null;
	},
	/**
	 * Attempts to register an user in the hub.
	 *
	 * @param user - The user to register.
	 *
	 * @returns A promise that resolves to a session if register is successful.
	 * Otherwise an error response or null.
	 */
	async register(user: UserRegisterType) {
		const response = await client("v1/auth/register", {
			method: "POST",
			body: user,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Session).safeParse(json);

		if (parsed.success && !isErrorResponse(parsed.data)) {
			sessionManager.set(parsed.data);
		}

		return parsed.success ? parsed.data : null;
	},
	/**
	 * Checks wether the user is authenticated.
	 *
	 * @returns A promise that resolves to a session if the status check is successful.
	 * Otherwise an error response or null.
	 */
	async checkStatus() {
		const response = await client("v1/auth/check-status", {
			method: "GET",
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Session).safeParse(json);

		if (parsed.success && !isErrorResponse(parsed.data)) {
			sessionManager.set(parsed.data);
		}

		return parsed.success ? parsed.data : null;
	},
};
