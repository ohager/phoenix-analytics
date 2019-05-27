import React from "react";
import Icon from "@material-ui/core/Icon/index";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { getIssueStats } from "./issuesUtils";
import LocalOffer from "@material-ui/core/SvgIcon/SvgIcon";

const Issues = ({ classes, issues }) => {
  const stats = getIssueStats(issues);

  return (
    <Card>
      <CardHeader color="danger" stats icon>
        <CardIcon color="danger">
          <Icon>info_outline</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Open Bugs</p>
        <h3 className={classes.cardTitle}>{stats.openBugs}</h3>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats} >
          {stats.openFeatureRequests} Feature Requests
        </div>
        <div className={classes.stats} >
          Oldest Open issue is from {stats.oldestOpen}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Issues;
