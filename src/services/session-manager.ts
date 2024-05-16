import { Session, type SessionType } from "@/models/session";

const SESSION_KEY = "session";

export const sessionManager = {
	set: (session: SessionType) => {
		localStorage.setItem(SESSION_KEY, JSON.stringify(session));
	},
	remove: () => localStorage.removeItem(SESSION_KEY),
	get: () => {
		const json = localStorage.getItem(SESSION_KEY);
		if (!json) return null;

		try {
			const session = Session.safeParse(JSON.parse(json));
			return session.success ? session.data : null;
		} catch (e) {
			console.error("Invalid session format");
			return null;
		}
	},
};
