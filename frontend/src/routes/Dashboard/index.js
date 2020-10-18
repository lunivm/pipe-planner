import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bucketCriteria } from '../../redux/constants/bucket';
import styles from './Dashboard.module.css';
import { ContainerClassWrapper } from '../../components/common';
import { getAllBucketsByCriteria } from '../../redux/actions/buckets';

const DashboardBucketsSection = ContainerClassWrapper(`${styles.DashboardBucketsSection} pp-flex pp-flex-fixed`);
const DashboardBucketItemsSection = ContainerClassWrapper('pp-flex pp-flex-sized');

function Dashboard(props) {
  const { getAllBucketsByCriteria } = props;

  useEffect(() => {
    getAllBucketsByCriteria(bucketCriteria.priority)
  }, [getAllBucketsByCriteria]);

  return (
    <div className="pp-flex pp-flex-sized">
      <DashboardBucketsSection><h1>here i am</h1></DashboardBucketsSection>
      <DashboardBucketItemsSection><h1>here i am2</h1></DashboardBucketItemsSection>
    </div>
  );
}

const mapDispatchToProps = {
  getAllBucketsByCriteria
};

export default connect(null, mapDispatchToProps)(Dashboard);
