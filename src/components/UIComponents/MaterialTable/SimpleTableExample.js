import React from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
////--------------------------
// import all icons first then use material-tables
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
////---------------------------
const Data = [
  {
    Name: "Israr",
    UserName: "israrMayo",
    birthYaer: 1987,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYaer: 1999,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYaer: 1979,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYaer: 1989,
    birthCity: 63,
  },
  {
    Name: "Israr",
    UserName: "israrMayo",
    birthYaer: 1987,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYaer: 1999,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYaer: 1979,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYaer: 1989,
    birthCity: 63,
  },
  {
    Name: "Israr",
    UserName: "israrMayo",
    birthYaer: 1987,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYaer: 1999,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYaer: 1979,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYaer: 1989,
    birthCity: 63,
  },
  {
    Name: "Israr",
    UserName: "israrMayo",
    birthYaer: 1987,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYaer: 1999,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYaer: 1979,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYaer: 1989,
    birthCity: 63,
  },
];
const SimpleTableExample = () => {
  return (
    <>
      <h1>SimpleTableExample----compo----</h1>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Name", field: "Name" },
            { title: "UserName", field: "UserName" },
            { title: "birthYaer", field: "birthYaer", type: "numeric" },
            {
              title: "birthCity",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Lahore" },
            },
          ]}
          data={Data}
          title="Demo Title"
          icons={{
            // Check: Check,
            // DetailPanel: ChevronRight,
            // Delete: DeleteOutline,
            // Export: SaveAlt,
            // Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            // ThirdStateCheck: Remove,
            // AddBox: AddBox,
            SortArrow: ArrowDownward,
            Clear: Clear,
            // Edit: Edit,
            // ViewColumn: ViewColumn,
            ResetSearch: Clear,
          }}
        />
      </div>
    </>
  );
};

export default SimpleTableExample;
