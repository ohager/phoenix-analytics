import React from "react"

import icon from "assets/img/logo_white.svg"
import {withStyles} from "@material-ui/core";

const style = {
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    opacity: "0.75"
  },
  icon: {
    width : "80px",
    animation: "heartbeat 1.5s linear infinite"
  },
  '@keyframes heartbeat': {
    '0%': {
      transform: 'scale(1)',
    },
    '30%': {
      transform: 'scale(1.1)',
    },
    '50%': {
      transform: 'scale(1)',
    },
    '60%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    }
  }
};

const LoadingIcon = ({classes}) => (
  <div className={classes.iconContainer}>
    <img src={icon} className={classes.icon} alt="Loading..."/>
  </div>
);

export default withStyles(style)(LoadingIcon)
