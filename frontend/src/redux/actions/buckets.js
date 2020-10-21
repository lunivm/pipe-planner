import { getAllBuckets } from '../../api/bucketAPI';
import actionTypes from '../constants/actionTypes';
import { bucketCriteria } from '../constants/bucket';

export const setBuckets = payload => {
  payload = payload || [];
  const errorRootEl = payload.find(i => !(i.total >= 0 && i.label && i.groups && i.groups.length > 0));
  const action = actionTypes.buckets.setBuckets;

  if (errorRootEl) {
    console.error(`value ${JSON.stringify(errorRootEl)} is not known ${action} action`);
  }

  return {
    type: action,
    payload
  };
};

export const setBucketsCriteria = payload => {
  const action = actionTypes.buckets.setBucketsCriteria;

  if (Object.values(bucketCriteria).indexOf(payload) < 0) {
    console.error(`value ${payload} is not known ${action} action`);
  }

  return {
    type: action,
    payload
  };
};

export const setBucketsOverallCounts = payload => {
  payload = payload || [];
  const errorEl = payload.find(i => !i.status || i < 0);
  const action = actionTypes.buckets.setBucketsOverallCounts;

  if (errorEl) {
    console.error(`value ${JSON.stringify(errorEl)} is not known ${action} action`);
  }

  return {
    type: action,
    payload
  };
};

export const getAllBucketsByCriteria = criteria => {
  return dispatch => getAllBuckets(criteria).then(response => {
    dispatch(setBucketsCriteria(response.criteria));
    dispatch(setBucketsOverallCounts(response.overallCounts));
    dispatch(setBuckets(response.buckets));
  });
};
