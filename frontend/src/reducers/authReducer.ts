import { SET_CURRENT_USER_DONE, SET_NEW_USER_DONE } from '../actions/types';

const initialState = {
  user: '',
};

interface Iaction {
  type: string;
  userString: string;
}

interface ReturnValue {
  user: string;
}

export default function(state = initialState, action: Iaction): ReturnValue {
  switch (action.type) {
    case SET_CURRENT_USER_DONE:
      return {
        user: action.userString,
      };
    case SET_NEW_USER_DONE:
      return {
        user: action.userString,
      };
    default:
      return state;
  }
}
