// Function that extract rows from data
export const getRows = (data) => {
  const rows = data.map((student, index) => {
    const biodata = student?.studentInfo[0];
    const programme = student?.studentInfo[3];
    return {
      id: index + 1,
      studentID: student?.studentID,
      firstName: biodata?.firstname,
      lastName: biodata?.lastname,
      email: biodata?.email,
      gender: biodata?.gender,
      department: programme?.department,
      programme: programme?.modeOfEntry,
      subjects: ` ${programme?.subject1.substring(0, 3) || ""} ,  ${
        programme?.subject2.substring(0, 3) || ""
      },  ${programme?.subject3.substring(0, 3) || ""}`,
    };
  });
  return rows;
};

export const getColumns = (HandleEditStudentProfile) => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "font-poppins",
      width: 50,
    },
    {
      field: "firstName",
      headerName: "First name",
      headerClassName: "font-poppins",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      headerClassName: "font-poppins",
      flex: 1,
    },
    {
      field: "studentID",
      headerName: "school ID",
      headerClassName: "font-poppins",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email Address",
      headerClassName: "font-poppins",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      headerClassName: "font-poppins",
      width: 100,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
    },
    {
      field: "programme",
      headerName: "Programme",
      flex: 1,
    },
    {
      field: "subjects",
      headerName: "Subjects comb",
      headerClassName: "font-poppins",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "Action",
      headerClassName: "font-poppins",
      flex: 1,

      renderCell: (params) => {
        return (
          <div className="flex flex-col gap-y-1 justify-between items-center">
            <span
              onClick={() => HandleEditStudentProfile(params.row.studentID)}
              className="material-symbols-outlined select-none p-2 cursor-pointer text-[23px]  hover:rounded-full hover:bg-sky-200 text-sky-900"
            >
              edit_note
            </span>
          </div>
        );
      },
    },
  ];
  return columns;
};
