import { UserTypes } from './UserType';

export interface AuthContextType {
  user: UserTypes | null;
  signin: (user: UserTypes) => Promise<void>;
  signOut: () => Promise<void>;
  loadUser: () => Promise<void>;
  loggedUser: () => Promise<void>;
}