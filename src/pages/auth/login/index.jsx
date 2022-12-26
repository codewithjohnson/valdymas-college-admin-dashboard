import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import valdymas from "../../../assets/imageValbg.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getServices } from "../../../services/firebase";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const loginSChema = object({
    email: string().required("email name cannot be empty"),
    password: string()
      .min(8)
      .required("password must be at least 8 characters"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSChema),
  });

  const loginAdmin = async (data) => {
    const { auth } = getServices();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          setError("Invalid email or password");
        }
      });
  };

  const onSubmitForm = (data) => {
    setIsLoading(true);
    loginAdmin(data);
    reset();
    setIsLoading(false);
  };

  return (
    <div className="pt-10 sm:pt-0 sm:flex gap-4 justify-start items-center sm:px-[100px] min-h-screen bg-gradient-to-r from-[#130E25] to-slate-700 ">
      <div className="image hidden lg:block">
        <img src={valdymas} alt="" />
      </div>

      {/* form container */}
      <div className=" w-[90%]  h-[542px] mx-auto bg-gradient-to-b from-slate-300 to-gray-600 ">
        <div className="text-xl relative text-gray-200 py-4 px-5 bg-gradient-to-r from-slate-600 to-slate-800 font-thin flex justify-between items-center ">
          <p className="uppercase  bg-orange-600 p-2 font-semibold text-gray-800 -inset-1 -skew-y-3 ">
            valdymas
          </p>
          <p className="text-[16px]">Login to account</p>
        </div>
        <form className="px-5 py-5" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="email mt-4">
            <label
              htmlFor="email"
              className=" text-md sm:text-xl text-gray-800  "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email")}
              id="email"
              className="w-full p-2 mt-3 border border-slate-400 rounded-md outline-none focus:outline-none focus:border-sky-700 focus:ring-1 shadow-sm"
            />

            {errors.email && (
              <p
                role="alert"
                className="errorMessage text-[11px] ml-1 text-red-900 capitalize"
              >
                {errors?.email.message}
              </p>
            )}
          </div>
          <div className="mt-5 password">
            <label
              htmlFor="password"
              className="text-md sm:text-xl text-gray-800 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              {...register("password")}
              id="password"
              className="w-full p-2 mt-3 border border-slate-400 rounded-md outline-none focus:outline-none focus:border-sky-700 focus:ring-1 shadow-sm"
            />

            {errors.password && (
              <p
                role="alert"
                className="errorMessage text-[11px] ml-1 text-red-900 capitalize"
              >
                {errors?.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading ? true : false}
            className="w-full p-2 mt-10 text-white capitalize rounded-md bg-slate-600 hover:bg-slate-700 text-lg font-semibold leading-9"
          >
            {isLoading ? "Loading..." : "sign in and work"}
          </button>
        </form>
        <div className="serviceError">
          {error && <Alert severity="error">{error}</Alert>}
        </div>
      </div>
    </div>
  );
};

export default Login;
