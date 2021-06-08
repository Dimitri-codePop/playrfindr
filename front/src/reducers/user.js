import {

} from 'src/actions/user';

const initialState = {
  prop1: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '':
      return {
        ...state,
        prop1: '',
      };
    default:
      return state;
  }
};

export default reducer;
