import type {
  QueryKey,
  UseQueryResult,
  UseQueryOptions,
  QueryOptions,
} from "@tanstack/react-query";
import { useQuery, queryOptions } from "@tanstack/react-query";
import client from "../client";
import type {
  GetDailyPromotedPlaceQueryResponse,
  GetDailyPromotedPlace401,
  GetDailyPromotedPlace403,
} from "./models";

export const getDailyPromotedPlaceQueryKey = () =>
  [{ url: `/v1/promoted-places/daily-promoted-place` }] as const;
export function getDailyPromotedPlaceQueryOptions<
  TData = GetDailyPromotedPlaceQueryResponse,
  TError = GetDailyPromotedPlace401 | GetDailyPromotedPlace403,
>(
  options: Partial<Parameters<typeof client>[0]> = {},
): UseQueryOptions<TData, TError> {
  const queryKey = getDailyPromotedPlaceQueryKey();

  return queryOptions({
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: "get",
        url: `/v1/promoted-places/daily-promoted-place`,

        ...options,
      }).then((res) => res.data);
    },
  });
}

/**
 * @summary Get daily promoted place
 * @link /v1/promoted-places/daily-promoted-place
 */

export function useGetDailyPromotedPlace<
  TData = GetDailyPromotedPlaceQueryResponse,
  TError = GetDailyPromotedPlace401 | GetDailyPromotedPlace403,
>(
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {},
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getDailyPromotedPlaceQueryKey();

  const query = useQuery<TData, TError>({
    ...getDailyPromotedPlaceQueryOptions<TData, TError>(clientOptions),
    ...queryOptions,
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
