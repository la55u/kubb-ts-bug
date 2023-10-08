import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Subset of AxiosRequestConfig
 */
type RequestConfig<TData = unknown> = {
  method: "get" | "put" | "patch" | "post" | "delete";
  url: string;
  params?: unknown;
  data?: TData;
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";
  signal?: AbortSignal;
  headers?: AxiosRequestConfig["headers"];
};

/**
 * Subset of AxiosResponse
 */
export type ResponseConfig<TData = unknown> = {
  data: TData;
  status: number;
  statusText: string;
  headers?: AxiosResponse["headers"];
};

export const axiosClient = async <TData, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>
): Promise<ResponseConfig<TData>> => {
  const promise = Axios.request<TVariables, ResponseConfig<TData>>({
    ...config,
  }).catch((e: AxiosError<TError>) => {
    throw e;
  });

  return promise;
};

export default axiosClient;
