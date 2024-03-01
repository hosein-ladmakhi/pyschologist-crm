export type TApiMethod = "DELETE" | "PATCH" | "PUT" | "GET" | "POST";

export type TApiOptions = Partial<Omit<RequestInit, "method" | "body">> & {
	body?: any;
};
