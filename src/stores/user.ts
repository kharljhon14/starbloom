import { Store } from '@tanstack/react-store';
import { User } from '../types/auth';

interface UserStore {
  user?: User;
}

export const userStore = new Store<UserStore>({});
