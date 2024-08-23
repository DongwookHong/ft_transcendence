export function getParsedItem(key) {
	const value = sessionStorage.getItem(key);
	return JSON.parse(value);
}

export function setStringifiedItem(key, value) {
	const stringifiedValue = JSON.stringify(value);
	sessionStorage.setItem(key, stringifiedValue);
}