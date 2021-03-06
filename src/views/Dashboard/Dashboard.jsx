import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "createRelayEnvironment";
import {PULL_REQUESTS_FETCH_COUNT, POLLING_INTERVAL, ISSUES_FETCH_COUNT} from "../../constants";
import DashboardContent from "./DashboardContent";
import query from "./Dashboard.ql"
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";

// eslint-disable-next-line react/prop-types
const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>{error.message}</div>;
  }
  else if (props) {
    return <DashboardContent {...props} />;
  }
  return <LoadingIcon/>;
};

const DashboardQuery = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{
        prCount: PULL_REQUESTS_FETCH_COUNT,
        issueCount: ISSUES_FETCH_COUNT
      }}
      cacheConfig={{
        poll: POLLING_INTERVAL
      }}
      render={renderQuery}
    />
  );
};

export default DashboardQuery;
