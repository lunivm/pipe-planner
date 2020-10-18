import { getAllBuckets } from '../../api/bucketAPI';
import actionTypes from '../constants/actionTypes';

export const setBuckets = payload => ({
  type: actionTypes.buckets.setBuckets,
  payload
});

export const setBucketsCriteria = payload => ({
  type: actionTypes.buckets.setBucketsCriteria,
  payload
});

export const getAllBucketsByCriteria = criteria => {
  return dispatch => getAllBuckets(criteria).then(buckets => {
    dispatch(setBucketsCriteria(criteria));
    dispatch(setBuckets(buckets));
  });
};
