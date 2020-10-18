const actionTypes = Object.freeze({
  dashboard: Object.freeze({
    pageLoad: 'DASHBOARD.PAGE_LOAD',
    pageUnload: 'DASHBOARD.PAGE_UNLOAD',
  }),
  buckets: Object.freeze({
    setBuckets: 'BUCKETS.SET_BUCKETS',
    setBucketsCriteria: 'BUCKETS.SET_BUCKETS_CRITERIA'
  })
});

export default actionTypes;
