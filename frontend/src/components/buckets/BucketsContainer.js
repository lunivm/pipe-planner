import React from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket';

import styles from './Buckets.module.css';

export default function BucketsContainer(props) {
  return (
    <div className={`${styles.BucketsContainer} pp-flex`}>
      {(props.buckets || []).map(i => <Bucket key={i.label} {...i}/>)}
    </div>
  );
}

BucketsContainer.propTypes = {
  buckets: PropTypes.arrayOf(
    PropTypes.shape(Bucket.propTypes)
  )
}
