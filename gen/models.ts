export const ErrorCodes = {
  BAD_REQUEST_ERROR: "BAD_REQUEST_ERROR",
  MALFORMED_DATA: "MALFORMED_DATA",
} as const;
export type ErrorCodes = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export type UserPlaceResponse = {
  /**
   * @type string
   */
  id: string;
  /**
   * @type string
   */
  name: string;
  /**
   * @type integer
   */
  couponCount: number;
  /**
   * @type string | undefined
   */
  description?: string;
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

/**
 * @description Unauthorized
 */
export type GetDailyPromotedPlace401 = any | null;

/**
 * @description Forbidden
 */
export type GetDailyPromotedPlace403 = any | null;

/**
 * @description OK
 */
export type GetDailyPromotedPlaceQueryResponse = UserPlaceResponse;
