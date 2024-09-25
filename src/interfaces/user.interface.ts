// Define a User type for TypeScript
export type TUser = {
  _id: string;
  name: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  role: string;
  updatedAt: string;
};

export type TUserJwtPayload = {
  userId: string;
  role: string;
  email: string;
};
