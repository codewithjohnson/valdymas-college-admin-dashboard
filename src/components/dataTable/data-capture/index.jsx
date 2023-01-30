import { memo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getColumns, getRows } from "../../../utilities/dataCapture";

const DataCapture = memo(() => {
  return (
    <div className="">
      <DataGrid
        rowHeight={100}
        autoHeight
        rows={getRows()}
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
