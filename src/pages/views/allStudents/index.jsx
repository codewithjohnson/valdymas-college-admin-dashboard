import React, { memo } from "react";
import { getServices } from "../../../services/firebase";

const Students = () => {
  const { firestore } = getServices();

  // Data Grid
  // first name, last name, email, gender, department, programme, subject combination

  return <div>AllStudents</div>;
};

const AllStudents = memo(Students);
export default AllStudents;
