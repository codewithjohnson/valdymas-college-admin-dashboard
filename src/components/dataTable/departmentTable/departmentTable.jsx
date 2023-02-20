import React, { memo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getColumns, getRows } from "../../../utilities/departmentTable";
import { useNavigate } from "react-router-dom";

const DepartmentTable = memo(({ studentsData }) => {
  const rows = getRows(studentsData);
  const navigate = useNavigate();

  const HandleEditStudentProfile = (studentID) => {
    const studentProfilePath = `/student/${studentID}`;
    navigate(studentProfilePath);
  };

  return (
    <div className="studentsDataTable h-[500px] w-full">
      <DataGrid
        rowHeight={100}
        autoHeight
        rows={rows}
        getRowClassName={() => `myDataGridRow`}
        getCellClassName={(params) => {
          return params.field === "id"
            ? "cellID"
            : params.field === "gender" && params.value === "male"
            ? "cellGenderMale"
            : params.field === "gender" && params.value === "female"
            ? "cellGenderFemale"
            : params.field === "firstName" ||
              params.field === "lastName" ||
              params.field === "fullName"
            ? "cellName"
            : params.field === "studentID"
            ? "text-green-800 font-semibold"
            : "";
        }}
        columns={getColumns(HandleEditStudentProfile)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className="myDataGrid"
        sx={{
          "& .myDataGridRow": {
            // odd row
            "&:nth-of-type(odd)": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      />
    </div>
  );
});

export default DepartmentTable;
