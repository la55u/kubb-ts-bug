import client from "./client";
import type { ResponseConfig } from "./client";
import type { GetDailyPromotedPlaceQueryResponse } from "./models";

/**
 * @summary Get daily promoted place
 * @link /v1/promoted-places/daily-promoted-place
 */
export async function getDailyPromotedPlace<
  TData = GetDailyPromotedPlaceQueryResponse,
>(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<TData>["data"]> {
  const { data: resData } = await client<TData>({
    method: "get",
    url: `/v1/promoted-places/daily-promoted-place`,
    ...options,
  });

  return resData;
}
export const operations = {
  getDailyPromotedPlace: {
    path: "/v1/promoted-places/daily-promoted-place",
    method: "get",
  },
} as const;
