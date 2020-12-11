import React from "react";

// MUI Compo
import Grid from "@material-ui/core/Grid";
import SimpleTableExample from "./MaterialTable/SimpleTableExample";
import MultipleActionTable from "./MaterialTable/MultipleActionTable";

// cutom style in reactjs

const customStyle = {
  margin: "40px",
  border: "5px solid pink",
  textAlign: "center", // <-- the magic
  fontWeight: "bold",
  fontSize: 58,
};
const contetStyle = {
  margin: "20px",
};

const Tables = () => {
  return (
    <>
      <h1 style={customStyle}>Table------compo----</h1>

      <Grid container>
        <Grid item style={contetStyle}>
          <SimpleTableExample />
        </Grid>
        <Grid item style={contetStyle}>
          <MultipleActionTable />
        </Grid>
      </Grid>
      <hr />
    </>
  );
};

export default Tables;
