export const ErrorCodes = {
  BAD_REQUEST_ERROR: "BAD_REQUEST_ERROR",
  MALFORMED_DATA: "MALFORMED_DATA",
} as const;
export type ErrorCodes = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export type UserProfileResponse = {
  /**
   * @type string
   */
  displayName: string;
  /**
   * @type string
   */
  id: string;
  /**
   * @type string | undefined
   */
  profilePictureId?: string;
  /**
   * @type string | undefined
   */
  email?: string;
  /**
   * @type boolean
   */
  isGuest: boolean;
};

export type UserRegisterRequest = {
  /**
   * @type string
   */
  displayName: string;
};

export type ErrorModel = {
  errorCode: ErrorCodes;
  /**
   * @type string | undefined
   */
  message?: string;
  /**
   * @type array | undefined
   */
  descriptors?: string[];
};

export type ErrorResponse = {
  errorModel?: ErrorModel;
};

export type RegisterUserMutationResponse = any | null;

/**
 * @description Created
 */
export type RegisterUser201 = UserProfileResponse;

/**
 * @description Bad Request
 */
export type RegisterUser400 = ErrorResponse;

export type RegisterUserMutationRequest = UserRegisterRequest;
