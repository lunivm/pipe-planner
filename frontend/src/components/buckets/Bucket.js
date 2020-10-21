import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import styles from './Buckets.module.css';

export default function Bucket(props) {
  const data = {
    labels: props.dataset.labels,
    datasets: [props.dataset]
  };

  const options = {
    aspectRatio: 1,
    legend: {
      display: false
    }
  };

  return (
    <div className={styles.Bucket}>
      <div className={styles.BucketTotal}>{props.total}</div>

      <Doughnut data={data}
        options={options}
        height={null}
        width={null}/>

      <div className={styles.BucketLabel}>{props.label}</div>
    </div>
  );
}

Bucket.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  dataset: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    backgroundColor: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}
