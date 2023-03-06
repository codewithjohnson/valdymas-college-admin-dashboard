import React, { lazy } from "react";
import Loadable from "../../../../components/loadable/Loadable";

const PasswordChange = Loadable(
  lazy(() =>
    import("../../../../components/forms/passwordChange/PasswordChange")
  )
);

const ChangePassword = () => {
  return (
    <div className="w-full h-full">
      <PasswordChange />
    </div>
  );
};

export default ChangePassword;
