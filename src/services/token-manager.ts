export const tokenManager = {
	set: (token: string) => localStorage.setItem("token", token),
	remove: () => localStorage.removeItem("token"),
	get: () => localStorage.getItem("token"),
};
