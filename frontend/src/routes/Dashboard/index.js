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
            <FlatGroupFilter items={[
              {
                label: '65',
                id: '65',
                tooltip: 'Not Started',
                style: FilterItemStyles.secondary
              },
              {
                label: '35',
                id: '35',
                tooltip: 'In Progress',
                style: FilterItemStyles.info
              },
              {
                label: '25',
                id: '25',
                tooltip: 'Done',
                style: FilterItemStyles.success
              },
              {
                label: '5',
                id: '5',
                tooltip: 'Hold',
                style: FilterItemStyles.danger
              }
            ]}/>
          </div>

          <div className="pp-flex pp-flex-sized">
            <BucketsContainer buckets={[
              {
                label: 'ASAP',
                dataset: {
                  labels: ['Not Started', 'In Progress', 'Done', 'Hold'],
                  data: [10, 35, 25, 5],
                  backgroundColor: [
                    '#6c757d',
                    '#17a2b8',
                    '#28a745',
                    '#dc3545'
                  ]
                }
              },
              {
                label: 'ASAP 222',
                dataset: {
                  labels: ['Not Started', 'In Progress', 'Done', 'Hold'],
                  data: [134, 300, 50, 100],
                  backgroundColor: [
                    '#6c757d',
                    '#17a2b8',
                    '#28a745',
                    '#dc3545'
                  ]
                }
              }
            ]}/>
          </div>
        </DashboardBucketsSectionContent>
      </DashboardBucketsSection>

      <DashboardBucketItemsSection/>
    </div>
  );
}

const mapDispatchToProps = {
  getAllBucketsByCriteria
};

export default connect(null, mapDispatchToProps)(Dashboard);
