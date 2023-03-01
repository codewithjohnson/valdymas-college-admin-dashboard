import { memo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getColumns, getRows } from "../../../utilities/dataCapture";
import { useStudentContext } from "../../../context/students";

const DataCapture = memo(() => {
  const { state } = useStudentContext();
  const rowData = Object.entries(state?.dataCapture);

  return (
    <div className="">
      <DataGrid
        rowHeight={100}
        autoHeight
        rows={getRows(rowData)}
        getRowClassName={() => `myDataGridRow`}
        columns={getColumns()}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className="myDataGrid"
        sx={{
          "& .myDataGridRow": {
            "&:nth-of-type(odd)": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      />
    </div>
  );
});
export default DataCapture;
