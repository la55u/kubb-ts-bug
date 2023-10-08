import client from "./client";
import type { ResponseConfig } from "./client";
import type {
  RegisterUserMutationRequest,
  RegisterUserMutationResponse,
} from "./models";

/**
 * @summary Register
 * @link /v1/users/register
 */

export async function registerUser<
  TData = RegisterUserMutationResponse,
  TVariables = RegisterUserMutationRequest,
>(
  data: TVariables,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<TData>["data"]> {
  const { data: resData } = await client<TData, TVariables>({
    method: "post",
    url: `/v1/users/register`,

    data,

    ...options,
  });

  return resData;
}

export const operations = {
  registerUser: { path: "/v1/users/register", method: "post" },
} as const;
