interface IUser {
  id: number;
  name: string;
  tax: number;
}

interface IGetUserResponse {
  data: IUser[];
}

export {
  IUser,
  IGetUserResponse,
};
