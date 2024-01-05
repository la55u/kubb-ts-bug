export type BasePage = {
  /**
   * @type integer int32
   * @default 0
   */
  totalPages: number;
  /**
   * @type integer int32
   * @default 0
   */
  size: number;
};

export type UserPlaceResponse = {
  /**
   * @type string
   */
  id: string;
};

export type PageUserPlaceResponse = {
  /**
   * @type array
   */
  content: UserPlaceResponse[];
} & BasePage;
