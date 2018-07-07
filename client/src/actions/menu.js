import { TRIGGER_MENU } from './index';

export const showMenu = props => dispatch => {
  dispatch({ type: TRIGGER_MENU, payload: props });
};
