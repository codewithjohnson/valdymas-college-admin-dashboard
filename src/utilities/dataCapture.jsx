export const getColumns = (data) => {
  const columns = [
    {
      field: "id",
      headerName: "s/n",
      headerClassName: "font-poppins uppercase",
      width: 50,
    },
    {
      field: "document/description",
      headerName: "description",
      headerClassName: "font-poppins uppercase",
      flex: 1,
    },
    {
      field: "document/type",
      headerName: "document type",
      headerClassName: "font-poppins uppercase",
      flex: 1,
    },

    {
      field: "name",
      headerName: "file name",
      headerClassName: "font-poppins uppercase",
      flex: 1,
    },
    {
      field: "uploaded/date",
      headerName: "uploaded date",
      headerClassName: "font-poppins uppercase",
      flex: 1,
    },

    {
      field: "status",
      headerName: "status",
      headerClassName: "font-poppins uppercase",
      flex: 1,
    },

    {
      field: "image",
      headerName: "image",
      headerClassName: "font-poppins uppercase",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex flex-col gap-y-1 justify-between items-center">
            <img src={params.row.image} alt="" className="w-10 h-10 rounded-full" />
          </div>
        );
      },
    },
  ];
  return columns;
};

export const getRows = (data) => {
  const rows = data.map((item, index) => {
    const blob = new Blob([item.data], { type: "image/jpeg" });
    const file = new File([blob], "image.jpeg", { type: "image/jpeg" });

    // Get the file name
    const fileName = file.name;

    // Get the file type nt
    const fileType = file.type.split("/").pop();

    // Get the file size
    const fileSize = file.size;

    // get last modified date, convert to date object of format "day month year"
    const fileLastModifiedDate = new Date(file.lastModified).toDateString();

    if (item[1].status === true) {
      return {
        id: index + 1,
        "document/description": item[0],
        "document/type": fileType,
        status: item[1].status,
        name: fileName,
        "uploaded/date": fileLastModifiedDate,
        image: item[1].data,
      };
    } else {
      return {
        id: index + 1,
        "document/description": "",
        "document/type": "",
        status: "",
        name: "",
        "uploaded/date": "",
        image: "",
      };
    }
  });
  return rows;
};
