import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BucketsContainer from '../../components/buckets/BucketsContainer';
import { ContainerClassWrapper } from '../../components/common/ContainerClassWrapper';
import { FilterItemStyles, FlatGroupFilter } from '../../components/FlatGroupFilter';
import { getAllBucketsByCriteria } from '../../redux/actions/buckets';
import { bucketCriteria } from '../../redux/constants/bucket';
import styles from './Dashboard.module.css';

const DashboardBucketsSection = ContainerClassWrapper(`${styles.DashboardBucketsSection} pp-flex pp-flex-fixed`);
const DashboardBucketsSectionToolPanel = ContainerClassWrapper(`${styles.DashboardBucketsSectionToolPanel} pp-flex pp-flex-fixed`);
const DashboardBucketsSectionContent = ContainerClassWrapper(`pp-flex pp-flex-sized pp-flex-column`);
const DashboardBucketItemsSection = ContainerClassWrapper('pp-flex pp-flex-sized');

const getFlatGroupFilterStyle = statusPriority => {
  switch (statusPriority) {
    case 0:
      return FilterItemStyles.secondary;
    case 1:
      return FilterItemStyles.primary;
    case 2:
      return FilterItemStyles.success;
    case 3:
      return FilterItemStyles.danger;
    default:
      return FilterItemStyles.dark;
  }
}

const getBucketColor = priority => {
  const colors = [
    '#6c757d',
    '#17a2b8',
    '#28a745',
    '#dc3545'
  ];

  return colors[priority];
}

function Dashboard(props) {
  const { getAllBucketsByCriteria } = props;

  useEffect(() => {
    getAllBucketsByCriteria(bucketCriteria.priority)
  }, [getAllBucketsByCriteria]);

  return (
    <div className="pp-flex pp-flex-sized">
      <DashboardBucketsSection>
        <DashboardBucketsSectionToolPanel/>

        <DashboardBucketsSectionContent>
          <div className={`${styles.DashboardBucketsOverallStatistics} pp-flex pp-flex-fixed`}>
            <FlatGroupFilter items={props.overallCounts}/>
          </div>

          <div className="pp-flex pp-flex-sized">
            <BucketsContainer buckets={props.buckets}/>
          </div>
        </DashboardBucketsSectionContent>
      </DashboardBucketsSection>

      <DashboardBucketItemsSection/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  overallCounts: state.buckets.overallCounts.map(({ total, status, priority }, index) => ({
    count: total,
    label: status,
    style: getFlatGroupFilterStyle(priority)
  })),
  buckets: state.buckets.items.map(({ label, total, groups }) => ({
    label,
    total,
    dataset: {
      labels: groups.map(i => i.label),
      data: groups.map(i => i.total),
      backgroundColor: groups.map(i => getBucketColor(i.priority))
    }
  }))
})

const mapDispatchToProps = {
  getAllBucketsByCriteria
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
