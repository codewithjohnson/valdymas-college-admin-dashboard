import React, { lazy } from "react";
import Loadable from "../../../../components/loadable/Loadable";

const PasswordPage = Loadable(
  lazy(() => import("../../../../components/forms/passwordPage/Password"))
);

const ChangePassword = () => {
  return <div>ChangePassword</div>;
};

export default ChangePassword;
