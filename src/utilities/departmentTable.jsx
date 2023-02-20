function getFullName(params) {
  return `${params.row.firstName || ""} ${params.row.lastName || ""}`;
}

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

export const getColumns = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "firstName",
      headerName: "First name",
      headerClassName: "font-poppins",
      width: 100,
    },
    {
      field: "lastName",
      headerName: "Last name",
      headerClassName: "font-poppins",
      width: 100,
    },

    {
      field: "fullName",
      headerName: "Full name",
      headerClassName: "font-poppins",
      width: 150,
      valueGetter: getFullName,
    },
    {
      field: "email",
      headerName: "Email Address",
      headerClassName: "font-poppins",
      width: 200,
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
      width: 100,
    },
    {
      field: "programme",
      headerName: "Programme",
      width: 100,
    },
    {
      field: "subjects",
      headerName: "Subjects comb",
      headerClassName: "font-poppins",
      width: 150,
    },
  ];
  return columns;
};
