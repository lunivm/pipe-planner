import actionTypes from '../constants/actionTypes';

const initialState = {
  bucketsCriteria: null,
  overallCounts: [],
  items: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.buckets.setBucketsCriteria:
      return {
        ...state,
        bucketsCriteria: action.payload
      };
    case actionTypes.buckets.setBucketsOverallCounts:
      return {
        ...state,
        overallCounts: action.payload
      };
    case actionTypes.buckets.setBuckets:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
