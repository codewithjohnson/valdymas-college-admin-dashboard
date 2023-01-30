export const getColumns = (data) => {
  const columns = [
    { field: "id", headerName: "s/n", width: 50 },
    {
      field: "document/type",
      headerName: "document type",
      headerClassName: "font-poppins",
      flex: 1,
    },
    {
      field: "uploaded/date",
      headerName: "uploaded date",
      headerClassName: "font-poppins",
      flex: 1,
    },
    {
      field: "status",
      headerName: "status",
      headerClassName: "font-poppins",
      flex: 1,
    },
  ];
  return columns;
};

export const getRows = (data) => {
  const rows = [];
  return rows;
};
