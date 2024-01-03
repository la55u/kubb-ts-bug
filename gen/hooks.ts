import client from "../client.ts";
import {
  useQuery,
  queryOptions,
  useInfiniteQuery,
  infiniteQueryOptions,
} from "@tanstack/react-query";
import type {
  GetLikedPlacesQueryResponse,
  GetLikedPlacesQueryParams,
} from "./models";
import type {
  QueryObserverOptions,
  UseQueryResult,
  QueryKey,
  InfiniteQueryObserverOptions,
  UseInfiniteQueryResult,
  InfiniteData,
} from "@tanstack/react-query";

type GetLikedPlacesClient = typeof client<
  GetLikedPlacesQueryResponse,
  never,
  never
>;
type GetLikedPlaces = {
  data: GetLikedPlacesQueryResponse;
  error: never;
  request: never;
  pathParams: never;
  queryParams: GetLikedPlacesQueryParams;
  headerParams: never;
  response: GetLikedPlacesQueryResponse;
  client: {
    parameters: Partial<Parameters<GetLikedPlacesClient>[0]>;
    return: Awaited<ReturnType<GetLikedPlacesClient>>;
  };
};
export const getLikedPlacesQueryKey = (
  params?: GetLikedPlaces["queryParams"],
) => [{ url: "/v1/user-liked-place" }, ...(params ? [params] : [])] as const;
export type GetLikedPlacesQueryKey = ReturnType<typeof getLikedPlacesQueryKey>;
export function getLikedPlacesQueryOptions(
  params?: GetLikedPlaces["queryParams"],
  options: GetLikedPlaces["client"]["parameters"] = {},
) {
  const queryKey = getLikedPlacesQueryKey(params);
  return queryOptions({
    queryKey,
    queryFn: async () => {
      const res = await client<GetLikedPlaces["data"], GetLikedPlaces["error"]>(
        {
          method: "get",
          url: `/v1/user-liked-place`,
          params,
          ...options,
        },
      );
      return res.data;
    },
  });
}
/**
 * @summary Get liked places of user
 * @link /v1/user-liked-place */
export function useGetLikedPlaces<
  TData = GetLikedPlaces["response"],
  TQueryData = GetLikedPlaces["response"],
  TQueryKey extends QueryKey = GetLikedPlacesQueryKey,
>(
  params?: GetLikedPlaces["queryParams"],
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetLikedPlaces["response"],
        GetLikedPlaces["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetLikedPlaces["client"]["parameters"];
  } = {},
): UseQueryResult<TData, GetLikedPlaces["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getLikedPlacesQueryKey(params);
  const query = useQuery({
    ...(getLikedPlacesQueryOptions(
      params,
      clientOptions,
    ) as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as QueryObserverOptions),
  }) as UseQueryResult<TData, GetLikedPlaces["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
export const getLikedPlacesInfiniteQueryKey = (
  params?: GetLikedPlaces["queryParams"],
) => [{ url: "/v1/user-liked-place" }, ...(params ? [params] : [])] as const;
export type GetLikedPlacesInfiniteQueryKey = ReturnType<
  typeof getLikedPlacesInfiniteQueryKey
>;
export function getLikedPlacesInfiniteQueryOptions(
  params?: GetLikedPlaces["queryParams"],
  options: GetLikedPlaces["client"]["parameters"] = {},
) {
  const queryKey = getLikedPlacesInfiniteQueryKey(params);
  return infiniteQueryOptions({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<GetLikedPlaces["data"], GetLikedPlaces["error"]>(
        {
          method: "get",
          url: `/v1/user-liked-place`,
          ...options,
          params: {
            ...params,
            ["id"]: pageParam,
            ...(options.params || {}),
          },
        },
      );
      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) =>
      Array.isArray(lastPage) && lastPage.length === 0
        ? undefined
        : lastPageParam + 1,
    getPreviousPageParam: (firstPage, allPages, firstPageParam) =>
      firstPageParam <= 1 ? undefined : firstPageParam - 1,
  });
}
/**
 * @summary Get liked places of user
 * @link /v1/user-liked-place */
export function useGetLikedPlacesInfinite<
  TData = GetLikedPlaces["response"],
  TQueryData = GetLikedPlaces["response"],
  TQueryKey extends QueryKey = GetLikedPlacesInfiniteQueryKey,
>(
  params?: GetLikedPlaces["queryParams"],
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        GetLikedPlaces["response"],
        GetLikedPlaces["error"],
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: GetLikedPlaces["client"]["parameters"];
  } = {},
): UseInfiniteQueryResult<InfiniteData<TData>, GetLikedPlaces["error"]> & {
  queryKey: TQueryKey;
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? getLikedPlacesInfiniteQueryKey(params);
  const query = useInfiniteQuery({
    ...(getLikedPlacesInfiniteQueryOptions(
      params,
      clientOptions,
    ) as InfiniteQueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as InfiniteQueryObserverOptions),
  }) as UseInfiniteQueryResult<InfiniteData<TData>, GetLikedPlaces["error"]> & {
    queryKey: TQueryKey;
  };
  query.queryKey = queryKey as TQueryKey;
  return query;
}
