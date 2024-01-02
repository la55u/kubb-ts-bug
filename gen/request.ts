import client from "../client.ts";
import type { ResponseConfig } from "../client.ts";
import type {
  UpdatePetMutationRequest,
  UpdatePetMutationResponse,
  AddPetMutationRequest,
  AddPetMutationResponse,
  FindPetsByStatusQueryResponse,
  FindPetsByStatusQueryParams,
  FindPetsByTagsQueryResponse,
  FindPetsByTagsQueryParams,
  GetPetByIdQueryResponse,
  GetPetByIdPathParams,
  UpdatePetWithFormMutationResponse,
  UpdatePetWithFormPathParams,
  UpdatePetWithFormQueryParams,
  DeletePetMutationResponse,
  DeletePetPathParams,
  DeletePetHeaderParams,
  UploadFileMutationRequest,
  UploadFileMutationResponse,
  UploadFilePathParams,
  UploadFileQueryParams,
  GetInventoryQueryResponse,
  PlaceOrderMutationRequest,
  PlaceOrderMutationResponse,
  PlaceOrderPatchMutationRequest,
  PlaceOrderPatchMutationResponse,
  GetOrderByIdQueryResponse,
  GetOrderByIdPathParams,
  DeleteOrderMutationResponse,
  DeleteOrderPathParams,
  CreateUserMutationRequest,
  CreateUserMutationResponse,
  CreateUsersWithListInputMutationRequest,
  CreateUsersWithListInputMutationResponse,
  LoginUserQueryResponse,
  LoginUserQueryParams,
  LogoutUserQueryResponse,
  GetUserByNameQueryResponse,
  GetUserByNamePathParams,
  UpdateUserMutationRequest,
  UpdateUserMutationResponse,
  UpdateUserPathParams,
  DeleteUserMutationResponse,
  DeleteUserPathParams,
} from "./models";

/**
 * @description Update an existing pet by Id
 * @summary Update an existing pet
 * @link /pet */
export async function updatePet(
  data: UpdatePetMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdatePetMutationResponse>["data"]> {
  const res = await client<UpdatePetMutationResponse, UpdatePetMutationRequest>(
    {
      method: "put",
      url: `/pet`,
      data,
      ...options,
    },
  );
  return res.data;
}

/**
 * @description Add a new pet to the store
 * @summary Add a new pet to the store
 * @link /pet */
export async function addPet(
  data: AddPetMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<AddPetMutationResponse>["data"]> {
  const res = await client<AddPetMutationResponse, AddPetMutationRequest>({
    method: "post",
    url: `/pet`,
    data,
    ...options,
  });
  return res.data;
}

/**
 * @description Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 * @link /pet/findByStatus */
export async function findPetsByStatus(
  params?: FindPetsByStatusQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<FindPetsByStatusQueryResponse>["data"]> {
  const res = await client<FindPetsByStatusQueryResponse>({
    method: "get",
    url: `/pet/findByStatus`,
    params,
    ...options,
  });
  return res.data;
}

/**
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 * @link /pet/findByTags */
export async function findPetsByTags(
  params?: FindPetsByTagsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<FindPetsByTagsQueryResponse>["data"]> {
  const res = await client<FindPetsByTagsQueryResponse>({
    method: "get",
    url: `/pet/findByTags`,
    params,
    ...options,
  });
  return res.data;
}

/**
 * @description Returns a single pet
 * @summary Find pet by ID
 * @link /pet/:petId */
export async function getPetById(
  petId: GetPetByIdPathParams["petId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetPetByIdQueryResponse>["data"]> {
  const res = await client<GetPetByIdQueryResponse>({
    method: "get",
    url: `/pet/${petId}`,
    ...options,
  });
  return res.data;
}

/**
 * @summary Updates a pet in the store with form data
 * @link /pet/:petId */
export async function updatePetWithForm(
  petId: UpdatePetWithFormPathParams["petId"],
  params?: UpdatePetWithFormQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdatePetWithFormMutationResponse>["data"]> {
  const res = await client<UpdatePetWithFormMutationResponse>({
    method: "post",
    url: `/pet/${petId}`,
    params,
    ...options,
  });
  return res.data;
}

/**
 * @description delete a pet
 * @summary Deletes a pet
 * @link /pet/:petId */
export async function deletePet(
  petId: DeletePetPathParams["petId"],
  headers?: DeletePetHeaderParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<DeletePetMutationResponse>["data"]> {
  const res = await client<DeletePetMutationResponse>({
    method: "delete",
    url: `/pet/${petId}`,
    headers: { ...headers, ...options.headers },
    ...options,
  });
  return res.data;
}

/**
 * @summary uploads an image
 * @link /pet/:petId/uploadImage */
export async function uploadFile(
  petId: UploadFilePathParams["petId"],
  data?: UploadFileMutationRequest,
  params?: UploadFileQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UploadFileMutationResponse>["data"]> {
  const res = await client<
    UploadFileMutationResponse,
    UploadFileMutationRequest
  >({
    method: "post",
    url: `/pet/${petId}/uploadImage`,
    params,
    data,
    ...options,
  });
  return res.data;
}

/**
 * @description Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 * @link /store/inventory */
export async function getInventory(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetInventoryQueryResponse>["data"]> {
  const res = await client<GetInventoryQueryResponse>({
    method: "get",
    url: `/store/inventory`,
    ...options,
  });
  return res.data;
}

/**
 * @description Place a new order in the store
 * @summary Place an order for a pet
 * @link /store/order */
export async function placeOrder(
  data?: PlaceOrderMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<PlaceOrderMutationResponse>["data"]> {
  const res = await client<
    PlaceOrderMutationResponse,
    PlaceOrderMutationRequest
  >({
    method: "post",
    url: `/store/order`,
    data,
    ...options,
  });
  return res.data;
}

/**
 * @description Place a new order in the store with patch
 * @summary Place an order for a pet with patch
 * @link /store/order */
export async function placeOrderPatch(
  data?: PlaceOrderPatchMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<PlaceOrderPatchMutationResponse>["data"]> {
  const res = await client<
    PlaceOrderPatchMutationResponse,
    PlaceOrderPatchMutationRequest
  >({
    method: "patch",
    url: `/store/order`,
    data,
    ...options,
  });
  return res.data;
}

/**
 * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 * @link /store/order/:orderId */
export async function getOrderById(
  orderId: GetOrderByIdPathParams["orderId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetOrderByIdQueryResponse>["data"]> {
  const res = await client<GetOrderByIdQueryResponse>({
    method: "get",
    url: `/store/order/${orderId}`,
    ...options,
  });
  return res.data;
}

/**
 * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 * @link /store/order/:orderId */
export async function deleteOrder(
  orderId: DeleteOrderPathParams["orderId"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<DeleteOrderMutationResponse>["data"]> {
  const res = await client<DeleteOrderMutationResponse>({
    method: "delete",
    url: `/store/order/${orderId}`,
    ...options,
  });
  return res.data;
}

/**
 * @description This can only be done by the logged in user.
 * @summary Create user
 * @link /user */
export async function createUser(
  data?: CreateUserMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateUserMutationResponse>["data"]> {
  const res = await client<
    CreateUserMutationResponse,
    CreateUserMutationRequest
  >({
    method: "post",
    url: `/user`,
    data,
    ...options,
  });
  return res.data;
}

/**
 * @description Creates list of users with given input array
 * @summary Creates list of users with given input array
 * @link /user/createWithList */
export async function createUsersWithListInput(
  data?: CreateUsersWithListInputMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateUsersWithListInputMutationResponse>["data"]> {
  const res = await client<
    CreateUsersWithListInputMutationResponse,
    CreateUsersWithListInputMutationRequest
  >({
    method: "post",
    url: `/user/createWithList`,
    data,
    ...options,
  });
  return res.data;
}

/**
 * @summary Logs user into the system
 * @link /user/login */
export async function loginUser(
  params?: LoginUserQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<LoginUserQueryResponse>["data"]> {
  const res = await client<LoginUserQueryResponse>({
    method: "get",
    url: `/user/login`,
    params,
    ...options,
  });
  return res.data;
}

/**
 * @summary Logs out current logged in user session
 * @link /user/logout */
export async function logoutUser(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<LogoutUserQueryResponse>["data"]> {
  const res = await client<LogoutUserQueryResponse>({
    method: "get",
    url: `/user/logout`,
    ...options,
  });
  return res.data;
}

/**
 * @summary Get user by user name
 * @link /user/:username */
export async function getUserByName(
  username: GetUserByNamePathParams["username"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetUserByNameQueryResponse>["data"]> {
  const res = await client<GetUserByNameQueryResponse>({
    method: "get",
    url: `/user/${username}`,
    ...options,
  });
  return res.data;
}

/**
 * @description This can only be done by the logged in user.
 * @summary Update user
 * @link /user/:username */
export async function updateUser(
  username: UpdateUserPathParams["username"],
  data?: UpdateUserMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateUserMutationResponse>["data"]> {
  const res = await client<
    UpdateUserMutationResponse,
    UpdateUserMutationRequest
  >({
    method: "put",
    url: `/user/${username}`,
    data,
    ...options,
  });
  return res.data;
}

/**
 * @description This can only be done by the logged in user.
 * @summary Delete user
 * @link /user/:username */
export async function deleteUser(
  username: DeleteUserPathParams["username"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<DeleteUserMutationResponse>["data"]> {
  const res = await client<DeleteUserMutationResponse>({
    method: "delete",
    url: `/user/${username}`,
    ...options,
  });
  return res.data;
}

export const operations = {
  updatePet: { path: "/pet", method: "put" },
  addPet: { path: "/pet", method: "post" },
  findPetsByStatus: { path: "/pet/findByStatus", method: "get" },
  findPetsByTags: { path: "/pet/findByTags", method: "get" },
  getPetById: { path: "/pet/:petId", method: "get" },
  updatePetWithForm: { path: "/pet/:petId", method: "post" },
  deletePet: { path: "/pet/:petId", method: "delete" },
  uploadFile: { path: "/pet/:petId/uploadImage", method: "post" },
  getInventory: { path: "/store/inventory", method: "get" },
  placeOrder: { path: "/store/order", method: "post" },
  placeOrderPatch: { path: "/store/order", method: "patch" },
  getOrderById: { path: "/store/order/:orderId", method: "get" },
  deleteOrder: { path: "/store/order/:orderId", method: "delete" },
  createUser: { path: "/user", method: "post" },
  createUsersWithListInput: { path: "/user/createWithList", method: "post" },
  loginUser: { path: "/user/login", method: "get" },
  logoutUser: { path: "/user/logout", method: "get" },
  getUserByName: { path: "/user/:username", method: "get" },
  updateUser: { path: "/user/:username", method: "put" },
  deleteUser: { path: "/user/:username", method: "delete" },
} as const;
