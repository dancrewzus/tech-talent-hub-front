import useSWR from "swr";

import { authApi } from "@/api/auth-api";

import { isErrorResponse } from "@/models/error-response";
import type { SessionType } from "@/models/session";

import { useToast } from "@/components/ui/use-toast";

import { sessionManager } from "@/services/session-manager";

export function useSession() {
	const { toast } = useToast();

	const { data, isLoading, mutate } = useSWR("session", async () => {
		const currentSession = sessionManager.get();
		if (!currentSession) return null;

		const response = await authApi.checkStatus();
		if (!response) return currentSession;

		if (response && isErrorResponse(response)) {
			sessionManager.remove();

			toast({
				title: "Sesión expirada",
				description: "Inicie sesión nuevamente para continuar",
			});
		}

		return response;
	});

	// Close the session
	const update = (session: SessionType | null) => {
		if (!session) {
			sessionManager.remove();
			mutate(null);
			return;
		}

		sessionManager.set(session);
		mutate(session);
	};

	// Closes the session.
	const logout = () => update(null);

	return {
		session: isLoading
			? sessionManager.get()
			: data && !isErrorResponse(data)
				? data
				: null,
		isLoading,
		update,
		logout,
	};
}
