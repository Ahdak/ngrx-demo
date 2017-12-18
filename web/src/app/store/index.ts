import {createSelector} from '@ngrx/store';
import {User} from '../user';

/** AppState **/
export interface AppState {
  users: UsersState;
}
export interface UsersState {
  items: User[];
}

// state slices
const selectUsersState = (appState: AppState) => appState.users;
const selectUsersItems = (state: UsersState) => state.items;
export const getUsers = createSelector( selectUsersState, selectUsersItems);
