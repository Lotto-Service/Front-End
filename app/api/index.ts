import axios from 'axios';
import { useSession } from 'next-auth/react';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const instance = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
});

export const get = async ({ url = '', params = {}, headers = {}, token = '' }) => {
  try {
    const result = await instance.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });
    const res = result;
    console.log('get res ===>> ', res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const post = async ({ url = '', body = {}, params = {}, headers = {}, token = '' }) => {
  try {
    const result = await instance.post(url, body, {
      ...params,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });
    const res = result;
    console.log('post res ===> ', res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const patch = async ({ url = '', body = {}, params = {}, headers = {}, token = '' }) => {
  try {
    const result = await instance.patch(url, body, {
      ...params,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });
    const res = result;
    console.log('patch res ===> ', res);

    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const put = async ({ url = '', body = {}, params = {}, headers = {} }) => {
  try {
    const result = await instance.put(url, body, {
      ...params,
      headers: {
        Authorization: `Bearer ${useSession().data?.accessToken}`,
        ...headers,
      },
    });
    const res = result;
    console.log('put res ===> ', res);

    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const remove = async ({ url = '', params = {}, headers = {} }) => {
  try {
    const result = await instance.delete(url, {
      ...params,
      headers: {
        Authorization: `Bearer ${useSession().data?.accessToken}`,
        ...headers,
      },
    });
    const res = result;
    console.log('remove res ===> ', res);
    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
