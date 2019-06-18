import React from 'react'
import ChartistGraph from "react-chartist";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import createDownloadsChartConfig from "./downloadsChartConfig";
import {getDownloadStats} from "./downloadsUtils";
import {withStyles} from "@material-ui/core";

const LegendStyle = (theme) =>  ({
  root: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    alignItems: "baseline",
    margin: "0",
    padding: "0",
    height: "100%",
    borderRadius: "2px",
    border: "lightgray 2px solid",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "0 2px",
      fontSize: "10px",
    },
    "& li": {
      padding: "4px 8px",
      [theme.breakpoints.down("sm")]: {
        padding: "0 2px",
        width: "100%",
        textAlign: "center",
      },
    },
  },
  win: {
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  linux: {
    backgroundColor: "#f05b4f"
  },
  macos: {
    backgroundColor: "#f4c63d"
  }
});

const _ChartLegend = ({classes}) => (
  <ul className={classes.root}>
    <li className={classes.win}>Windows</li>
    <li className={classes.linux}>Linux</li>
    <li className={classes.macos}>MacOS</li>
  </ul>
);

const ChartLegend = withStyles(LegendStyle)(_ChartLegend);

const DownloadsChart = ({classes, releases}) => {

  const chartConfig = createDownloadsChartConfig(releases);
  const downloadStats = getDownloadStats(releases);

  const {distribution} = downloadStats;

  return (
    <Card chart>
      <CardHeader color="primary">
        <ChartistGraph
          className="ct-chart"
          data={chartConfig.data}
          type="Bar"
          options={chartConfig.options}
          responsiveOptions={chartConfig.responsiveOptions}
          listener={chartConfig.animation}
        />
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardCategory}>Downloads</h4>
        <div className={classes.cardInline}>
          <h3 className={classes.cardTitle}>
            {`Total Downloads: ${downloadStats.totalDownloads}`}
          </h3>
          <ChartLegend/>
        </div>
      </CardBody>
      <CardFooter chart>
        <div className={classes.stats}>
          {`Windows: ${distribution.win.toFixed(2)}`}
          {` - Linux: ${distribution.linux.toFixed(2)}`}
          {` - MacOS: ${distribution.macos.toFixed(2)}`}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DownloadsChart;
