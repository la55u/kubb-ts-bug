import client from "../client.ts";
import type { ResponseConfig } from "../client.ts";
import type {
  GetLikedPlacesQueryResponse,
  GetLikedPlacesQueryParams,
} from "./models";

/**
 * @summary Get liked places of user
 * @link /v1/user-liked-place */
export async function getLikedPlaces(
  params?: GetLikedPlacesQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetLikedPlacesQueryResponse>["data"]> {
  const res = await client<GetLikedPlacesQueryResponse>({
    method: "get",
    url: `/v1/user-liked-place`,
    params,
    ...options,
  });
  return res.data;
}

export const operations = {
  getLikedPlaces: { path: "/v1/user-liked-place", method: "get" },
} as const;
