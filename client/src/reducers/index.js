import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';
import { menuReducer } from './menuReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  menuShown: menuReducer
});

export default rootReducer;
