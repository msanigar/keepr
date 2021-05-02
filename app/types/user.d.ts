export interface IUser {
  displayName: string | null;
  email: string | null;
}

export interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
  logout: () => Promise<void>;
}
