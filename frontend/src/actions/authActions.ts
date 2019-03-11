import { SET_CURRENT_USER, SET_NEW_USER } from './types';

interface InterfaceReturn {
  type: string;
  payload: string;
}

export const validateUser = (user: string): {} => ({ type: SET_NEW_USER, auth: { user }});
export const getDBUser = (): {} => ({ type: SET_CURRENT_USER });
