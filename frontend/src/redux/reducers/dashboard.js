import actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.dashboard.pageLoad:
    default:
      return state;
  }
}
