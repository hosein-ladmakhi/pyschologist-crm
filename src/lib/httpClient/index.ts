import { TApiMethod, TApiOptions } from "./index.type";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!;

const api = async <ResponseType>(
	url: string,
	method: TApiMethod,
	options: TApiOptions = {}
): Promise<ResponseType> => {
	// HEADERS CONENT TYPE AND BODY TRANSFORMATION
	const headers = new Headers(options.headers || {});
	if (options.body) {
		if (options.body instanceof FormData) {
			headers.delete("Content-Type");
		} else {
			headers.set("Content-Type", "application/json");
			options.body = JSON.stringify(options.body);
		}
	}

	// ADD TOKEN TO HEADER
	const { accessToken } = (await getServerSession(authOptions)) as {
		accessToken: string;
	};
	headers.set("Authorization", `Bearer ${accessToken}`);

	return fetch(baseURL.concat(url), { ...options, method, headers })
		.then((res) => res.json())
		.catch((err) => Promise.reject<any>(err));
};

const httpGet = async <ResponseType>(
	url: string,
	options: TApiOptions = {}
) => {
	return api<ResponseType>(url, "GET", options);
};

const httpPost = async <ResponseType, RequestBody>(
	url: string,
	body: RequestBody,
	options: TApiOptions = {}
) => {
	return api<ResponseType>(url, "POST", { ...options, body });
};

const httpDelete = async <ResponseType>(
	url: string,
	options: TApiOptions = {}
) => {
	return api<ResponseType>(url, "DELETE", options);
};

const httpPut = async <ResponseType, RequestBody>(
	url: string,
	body: RequestBody,
	options: TApiOptions = {}
) => {
	return api<ResponseType>(url, "PUT", { ...options, body });
};

const httpPatch = async <ResponseType, RequestBody>(
	url: string,
	body: RequestBody,
	options: TApiOptions = {}
) => {
	return api<ResponseType>(url, "PATCH", { ...options, body });
};

export { httpGet, httpPost, httpDelete, httpPut, httpPatch };
