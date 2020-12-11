import React from "react";
import MaterialTable from "material-table";
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
    birthYear: 1887,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYear: 1799,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYear: 2079,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYear: 1900,
    birthCity: 63,
  },
  {
    Name: "Israr",
    UserName: "israrMayo",
    birthYear: 1987,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYear: 1999,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYear: 1979,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYear: 1989,
    birthCity: 63,
  },
  {
    Name: "Israr",
    UserName: "israrMayo",
    birthYear: 1987,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYear: 1999,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYear: 1979,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYear: 1989,
    birthCity: 63,
  },
  {
    Name: "Israr",
    UserName: "israrMayo",
    birthYear: 1987,
    birthCity: 63,
  },
  {
    Name: "Wasiq ",
    UserName: "wasiqDabir",
    birthYear: 1999,
    birthCity: 63,
  },
  {
    Name: "Salis ",
    UserName: "SalisReact",
    birthYear: 1979,
    birthCity: 63,
  },
  {
    Name: "Uzair ",
    UserName: "uzairKhan",
    birthYear: 1989,
    birthCity: 63,
  },
];
const MultipleActionTable = () => {
  return (
    <>
      <h1>MultipleActionTable----compo----</h1>
      <MaterialTable
        title="Multiple Actions Preview"
        columns={[
          { title: "Name", field: "Name" },
          { title: "UserName", field: "UserName" },
          { title: "birthYear", field: "birthYear", type: "numeric" },
          {
            title: "birthCity",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Lahore" },
          },
        ]}
        data={Data}
        icons={{
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
          Search: Search,
          SortArrow: ArrowDownward,
          Clear: Clear,
          ResetSearch: Clear,
        }}
        actions={[
          {
            icon: SaveAlt,
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.Name),
          },
          (Data) => ({
            onClick: (event, Data) => alert("You want to delete " + Data.Name),
            disabled: Data.birthYear > 2000 ? true : false,
            icon: DeleteOutline,
            tooltip: "Delete User",
          }),
        ]}
      />
    </>
  );
};

export default MultipleActionTable;
