import { TApiMethod, TApiOptions } from './index.type';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { getSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { handleUnauthApi } from './handle-api-error';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL!;

const api = async <ResponseType>(
  url: string,
  method: TApiMethod,
  options: TApiOptions = {},
): Promise<ResponseType> => {
  // HEADERS CONENT TYPE AND BODY TRANSFORMATION
  const headers = new Headers(options.headers || {});
  if (options.body) {
    if (options.body instanceof FormData) {
      headers.delete('Content-Type');
    } else {
      headers.set('Content-Type', 'application/json');
      options.body = JSON.stringify(options.body);
    }
  }

  try {
    // ADD TOKEN TO HEADER IN SERVER
    const session = (await getServerSession(authOptions)) as {
      accessToken: string;
    };
    headers.set('Authorization', `Bearer ${session?.accessToken}`);
  } catch (error) {}

  if (!headers.get('Authorization')) {
    try {
      const session = (await getSession()) as any;
      headers.set('Authorization', `Bearer ${session?.accessToken}`);
    } catch (error) {}
  }
  try {
    const response = await fetch(baseURL.concat(url), {
      ...options,
      method,
      headers,
    });
    const responseJSON = await response.json();
    if (response.status === 401) {
      handleUnauthApi();
      throw new Error();
    }
    return responseJSON;
  } catch (error) {
    console.log('ERROR', error);
    return error;
  }
};

const httpGet = async <ResponseType>(
  url: string,
  options: TApiOptions = {},
) => {
  return api<ResponseType>(url, 'GET', options);
};

const httpPost = async <ResponseType, RequestBody>(
  url: string,
  body: RequestBody,
  options: TApiOptions = {},
) => {
  return api<ResponseType>(url, 'POST', { ...options, body });
};

const httpDelete = async <ResponseType>(
  url: string,
  options: TApiOptions = {},
) => {
  return api<ResponseType>(url, 'DELETE', options);
};

const httpPut = async <ResponseType, RequestBody>(
  url: string,
  body: RequestBody,
  options: TApiOptions = {},
) => {
  return api<ResponseType>(url, 'PUT', { ...options, body });
};

const httpPatch = async <ResponseType, RequestBody>(
  url: string,
  body: RequestBody,
  options: TApiOptions = {},
) => {
  return api<ResponseType>(url, 'PATCH', { ...options, body });
};

export { httpGet, httpPost, httpDelete, httpPut, httpPatch };
