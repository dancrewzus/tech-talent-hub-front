import { isErrorResponse } from "@/models/error-response";
import { Session } from "@/models/session";
import { UserCredentialsType } from "@/models/user-credentials";

import { tokenService } from "@/services/token-service";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const authApi = {
	async login(userCredentials: UserCredentialsType) {
		const response = await client("v1/auth/login", {
			method: "POST",
			body: userCredentials,
		});

		const json = await response?.json();
		const parsed = createApiResponseSchema(Session).safeParse(json);

		if (parsed.success && !isErrorResponse(parsed.data)) {
			tokenService.set(parsed.data.token);
		}

		return parsed.success ? parsed.data : null;
	},
};
