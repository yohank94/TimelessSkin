import { TRIGGER_MENU } from '../actions';

const initialState = false;

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_MENU:
      return !state;
    default:
      return state;
  }
};

export { menuReducer };
