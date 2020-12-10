import React from "react";
// MUI Compo
import Grid from "@material-ui/core/Grid";

import MyBarChart from "./ReCharts/MyBarChart";
import MyLineChart from "./ReCharts/MyLineChart";
import MyAreaChart from "./ReCharts/MyAreaChart";
import MyComposedChart from "./ReCharts/MyComposedChart";
import MyScatterChart from "./ReCharts/MyScatterChart";
import MyPieChart from "./ReCharts/MyPieChart";
import MyRadarChart from "./ReCharts/MyRadarChart";
import MyRadialBarChart from "./ReCharts/MyRadialBarChart";
import MyTreeMap from "./ReCharts/MyTreeMap";

// cutom style in reactjs

const customStyle = {
  margin: "40px",
  border: "5px solid pink",
  textAlign: "center", // <-- the magic
  fontWeight: "bold",
  fontSize: 58,
};
const contetStyle = {
  margin: "40px",
};
const Charts = () => {
  return (
    <>
      <h1 style={customStyle}>Charts------compo----</h1>

      <Grid container style={contetStyle}>
        <Grid item sm={6}>
          <MyLineChart />
        </Grid>
        <Grid item sm={6}>
          <MyBarChart />
        </Grid>
      </Grid>
      <hr />
      <Grid container style={contetStyle}>
        <Grid item sm={6}>
          <MyAreaChart />
        </Grid>
        <Grid item sm={6}>
          <MyComposedChart />
        </Grid>
      </Grid>
      <hr />
      <Grid container style={contetStyle}>
        <Grid item sm={6}>
          <MyScatterChart />
        </Grid>
        <Grid item sm={6}>
          <MyPieChart />
        </Grid>
      </Grid>
      <hr />
      <Grid container style={contetStyle}>
        <Grid item sm={6}>
          <MyRadarChart />
        </Grid>
        <Grid item sm={6}>
          <MyRadialBarChart />
        </Grid>
      </Grid>
      <hr />
      <Grid container style={contetStyle}>
        <Grid item sm={6}>
          <MyTreeMap />
        </Grid>
        <Grid item sm={6}></Grid>
      </Grid>
      <hr />
    </>
  );
};

export default Charts;
