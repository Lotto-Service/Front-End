import { CommonApiType } from "@/utils/type";
import axios from "axios";
import { getSession } from "next-auth/react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const instance = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = async (props: CommonApiType) => {
  const { url = "", headers = {}, params = {} } = props;

  try {
    const result = await instance.get(url, {
      params,
      headers: {
        ...headers,
      },
    });
    const res = result;
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const post = async (props: CommonApiType) => {
  const { url = "", body = {}, token = "", headers = {}, params = {} } = props;

  try {
    const result = await instance.post(url, body, {
      ...params,
      headers: {
        ...headers,
      },
    });
    const res = result;
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const patch = async (props: CommonApiType) => {
  const { url = "", body = {}, token = "", headers = {}, params = {} } = props;

  try {
    const result = await instance.patch(url, body, {
      ...params,
      headers: {
        ...headers,
      },
    });
    const res = result;

    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const put = async (props: CommonApiType) => {
  const { url = "", body = {}, token = "", headers = {}, params = {} } = props;

  try {
    const result = await instance.put(url, body, {
      ...params,
      headers: {
        ...headers,
      },
    });
    const res = result;

    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const remove = async (props: CommonApiType) => {
  const { url = "", token = "", headers = {}, params = {} } = props;

  try {
    const result = await instance.delete(url, {
      ...params,
      headers: {
        ...headers,
      },
    });
    const res = result;
    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
