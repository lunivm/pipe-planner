import actionTypes from '../constants/actionTypes';

const initialState = {
  bucketsCriteria: '',
  buckets: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.dashboard.dashboardPageLoad:
    default:
      return state;
  }
}
