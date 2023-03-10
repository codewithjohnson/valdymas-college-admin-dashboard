import React, { memo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getColumns, getRows } from "../../../utilities/studentsTable";
import { useNavigate } from "react-router-dom";
import { deleteStudentDoc } from "../../../services/firestore/students/students";
import { useYearContext } from "../../../context/setYears/setYears";
import axios from "axios";

const StudentsTable = memo(({ studentsData }) => {
  const navigate = useNavigate();
  const rows = getRows(studentsData);
  const { state: yearState } = useYearContext();
  const { setYearRange: currentYear } = yearState;

  // edit student profile
  const HandleEditStudentProfile = (studentID) => {
    const studentProfilePath = `/student/${studentID}`;
    navigate(studentProfilePath);
  };

  // delete student profile
  const HandleDeleteStudentProfile = async (studentID) => {
    await deleteStudentDoc(currentYear, studentID);
    try {
      const student = { uid: studentID };
      const res = await axios.post(
        "http://127.0.0.1:5001/valdymas-admin-dashboard-8ef0d/us-central1/app/api/students/delete",
        student
      );
      res.status === 200 && alert("student deleted");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        alert(error.request);
      } else {
        alert(error);
      }
    }
  };

  return (
    <div className="flex flex-col h-[100%] w-full">
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
            ? "font-bold"
            : "";
        }}
        columns={getColumns(
          HandleEditStudentProfile,
          HandleDeleteStudentProfile
        )}
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

export default StudentsTable;
