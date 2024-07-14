import countriesJson from "./countries.json";

export const currencies = Array.from(
	new Set(countriesJson.map((country) => country.currency)),
);
