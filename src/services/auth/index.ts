import { httpPost } from "@/lib/httpClient";
import {
	ILoginRequestBody,
	ILoginResponse,
	ISignupRequestBody,
	ISignupResponse,
} from "@/types/auth.type";

// HTTP POST
export const loginMutationApi = (body: ILoginRequestBody) =>
	httpPost<ILoginResponse, ILoginRequestBody>("/auth/login/patient", body);

export const signupMutationApi = (body: ISignupRequestBody) =>
	httpPost<ISignupResponse, ISignupRequestBody>("/auth/signup/patient", body);
