import {ADD_USER, AddUserAction, LOAD_USERS_COMPLETED} from './app.actions';
import {UsersState} from './index';

/** reducer **/
const initialState: UsersState = {
  items: []
};
export function userReducer(state: UsersState = initialState, action: AddUserAction) {
  switch (action.type) {
    case ADD_USER :
      return {
        ...state,
        items : [...state.items, action.payload]
      };
    case LOAD_USERS_COMPLETED :
      return {
        ...state,
        items : action.payload
      };
    default:
      return state;
  }
}
