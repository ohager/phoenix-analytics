import React from "react";
import Icon from "@material-ui/core/Icon/index";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { getPullRequestsStats } from "./pullRequestsUtils";

const PullRequests = ({ classes, pullRequests }) => {
  const stats = getPullRequestsStats(pullRequests);

  return (
    <Card>
      <CardHeader color="success" stats icon>
        <CardIcon color="success">
          <Icon>merge_type</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Open Pull Requests</p>
        <h3 className={classes.cardTitle}>
          {`${stats.total - stats.closed}/${stats.total}`}
        </h3>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats} >
          {stats.period}
        </div>
        <div className={classes.stats} >
          Oldest Open PR is from {stats.oldestOpen}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PullRequests;
