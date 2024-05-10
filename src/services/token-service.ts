export const tokenService = {
	set: (token: string) => localStorage.setItem("token", token),
	remove: () => localStorage.removeItem("token"),
	get: () => localStorage.getItem("token"),
};
