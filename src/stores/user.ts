import { Store } from '@tanstack/react-store';
import { User } from '../types/auth';

interface UserStore {
  user?: User;
  hasToken: boolean;
}

export const userStore = new Store<UserStore>({ hasToken: false });
