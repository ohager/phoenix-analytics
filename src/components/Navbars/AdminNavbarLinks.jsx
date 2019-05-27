import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip"
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import StarRate from "@material-ui/icons/StarRate";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Dashboard className={classes.icons}/>
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Dashboard</p>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
