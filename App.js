import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";
// import GetAppIcon from "@mui/icons-material/GetApp";
// import AddIcon from "@mui/icons-material/Add";

function App() {
  const [tableData, setTableData] = useState([
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      sal: 78456
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      sal: 456125
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      sal: 458796
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      sal: 874569
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      age: 25,
      gender: "F",
      city: "Patna",
      sal: 748521
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      sal: 456125
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      sal: 458796
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      sal: 874569
    },
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      sal: 78456
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      sal: 456125
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      sal: 458796
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      sal: 874569
    }
  ]);
  const columns = [
    {
      title: "Name",
      field: "name",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" }
    },
    { title: "Email", field: "email", filterPlaceholder: "filter" },
    { title: "Phone Number", field: "phone", align: "center", grouping: false },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>null</em>,
      render: (rowData) => (
        <div
          style={{
            background: rowData.age >= 18 ? "#008000aa" : "#f90000aa",
            borderRadius: "4px",
            paddingLeft: 5
          }}
        >
          {rowData.age >= 18 ? "18+" : "18-"}
        </div>
      ),
      searchable: false,
      export: false
    },
    { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" } },
    { title: "City", field: "city", filterPlaceholder: "filter" },
    {
      title: "Employee Salaray",
      field: "sal",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" }
    }
  ];
  return (
    <div className="App">
      <h4 align="center">Reusable Table Component</h4>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            })
        }}
        actions={[
        //   {
        //     icon: () => <button>Get</button>,
        //     tooltip: "Click me",
        //     onClick: (e, data) => console.log(data)
        //     // isFreeAction:true
        //   }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null
            // color:"primary"
          }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" }
        }}
        title="Employee Data"
        icons={{ Add: () => <button>+</button> }}
      />
    </div>
  );
}

export default App;
