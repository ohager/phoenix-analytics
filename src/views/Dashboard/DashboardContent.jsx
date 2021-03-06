import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import PullRequests from "./widgets/PullRequests/PullRequests";
import PullRequestsChart from "./widgets/PullRequests/PullRequestsChart";
import Issues from "./widgets/Issues/Issues";
import DownloadsChart from "./widgets/Downloads/DownloadsChart";

class DashboardContent extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({value});
  };

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  render() {
    const {classes, repository} = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <PullRequests
              classes={classes}
              pullRequests={repository.pullRequests}
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Issues
              classes={classes}
              issues={repository.issues}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <PullRequestsChart
              classes={classes}
              pullRequests={repository.pullRequests}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <DownloadsChart
              classes={classes}
              releases={repository.releases}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

DashboardContent.propTypes = {
  classes: PropTypes.object.isRequired,
  repository: PropTypes.object.isRequired
};


export default withStyles(dashboardStyle)(DashboardContent);
