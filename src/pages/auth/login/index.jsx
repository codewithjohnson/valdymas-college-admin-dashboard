import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

import { useStudentContext } from "../../../context/students";

// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { getServices } from "../../../services/firebase";

// firestore
import {
  checkAdminExists,
  checkAdminRole,
  findStudent,
} from "../../../services/firestore/students/students";

// components
import Spinner from "../../../components/spinner";

// form hooks
import { useLoginFormHooks } from "../../../schemas/login";

const Login = () => {
  const navigate = useNavigate();
  const { auth } = getServices();
  const yearRange = "2022-2023";

  // spinner override
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  // form hooks
  const {
    loginRegister,
    loginReset,
    loginHandleSubmit,
    loginErrors,
    loginIsValid,
    loginIsSubmitting,
    loginIsSubmitted,
    loginIsSubmitSuccessful,
  } = useLoginFormHooks();

  // reset form on successful submit
  useEffect(() => {
    if (loginIsSubmitted && loginIsSubmitSuccessful) {
      loginReset();
    }
  }, [loginIsSubmitted, loginIsSubmitSuccessful]);

  // login function
  const login = async (auth, email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };

  // login admin
  const loginAdmin = async (level, userID) => {
    if (level === "admin") {
      const isAdmin = await checkAdminExists(yearRange, userID);
      if (isAdmin) {
        const NEXTROUTE = "/students";
        navigate(NEXTROUTE);
      }
    }
  };

  // login student
  const loginStudent = async (level, userID) => {
    if (level === "student") {
      const isStudent = await findStudent(yearRange, userID);

      if (isStudent) {
        const studentID = isStudent;
        const NEXTROUTE = `/student/${studentID}`;
        navigate(NEXTROUTE);
      }
    }
  };

  // on form submit and attempt to login
  const onFormSubmit = async (data) => {
    const { level, email, password } = data;
    try {
      const user = await login(auth, email, password);
      const userID = user.uid;
      loginAdmin(level, userID);
      loginStudent(level, userID);
    } catch (error) {
      const errorMessage = error.message;
      const errorCode = error.code;
      console.log(errorMessage, errorCode);
    }
  };

  return (
    <div className="font-poppins min-h-screen flex flex-col sm:flex sm:flex-row my-0 mx-auto h-full w-full bg-gray-100 justify-center items-center relative overflow-hidden">
      {/* left */}

      <div className="instruction--container bg-teal-700 text-white pt-8 px-8 my-6 rounded-md border-none sm: w-[80%] sm:w-[500px] h-[538px] select-none z-10 ">
        <div className="instruction__content">
          <p className="text-xl capitalize">
            <span className="font-semibold">welcome</span> to Valydmas College Portal
          </p>
          <div className="instruction mt-10">
            <p className=" text-lg">Instructions to sign in</p>
            <ul className="list-disc text-gray-300 text-sm pl-9 ">
              <li className="py-5 capitalize  my-3 px-3 shadow-xl ">select your level</li>
              <li className="py-5 capitalize my-3 px-2 shadow-xl">
                enter your email and password to sign in
              </li>
              <li className="py-5 capitalize my-3 px-2 shadow-xl">
                for first time user, your password is your surname
              </li>
              <li className="py-5 capitalize my-3 px-2 shadow-xl">
                if you do not have an account, contact an admin
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* right */}
      <form
        onSubmit={loginHandleSubmit(onFormSubmit)}
        className="flex flex-col  w-[80%] sm:w-[500px] my-4  rounded-md bg-white pb-6 z-10"
      >
        <p className="text-green-900 text-sm m-4 pl-2 py-2  w-full border-l-4 border-l-orange-500 select-none ">
          Sign in to portal
        </p>

        <div className="form__container px-7">
          <div className="image  flex flex-row justify-center items-center mb-6">
            <img src={logo} alt="" className="w-[80px] h-[80px]" />
          </div>

          <div className="select">
            <select
              name="level"
              id="level"
              {...loginRegister("level")}
              className={`block w-full p-3 py-4 mt-2 border rounded-lg shadow-sm text-green-900 border-green-200 focus:outline-none focus:ring focus:ring-green-100 hover:border-green-800 cursor-pointer ${
                loginErrors?.level ? " border-red-500" : ""
              }   `}
            >
              <option value="level">select level</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="email mt-6">
            <label htmlFor="email" className="text-gray-800  capitalize">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              {...loginRegister("email")}
              placeholder="example@gmail.com"
              className={`block w-full p-3  mt-2 text-sm border rounded-lg shadow-sm  placeholder-slate-300 border-green-200 focus:outline-none focus:ring focus:ring-green-100 hover:border-green-800 ${
                loginErrors?.email ? " border-red-500" : ""
              }  `}
            />
          </div>

          <div className="password mt-6">
            <label htmlFor="password" className="text-gray-800  capitalize">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...loginRegister("password")}
              className={`block w-full p-3  mt-2 text-sm border rounded-lg shadow-sm  placeholder-slate-300 border-green-200 focus:outline-none focus:ring focus:ring-green-100 hover:border-green-800 ${
                loginErrors?.password ? " border-red-500" : ""
              }  `}
            />
          </div>

          <div className="submit-btn mt-6">
            <button
              disabled={loginIsSubmitting}
              type="submit"
              className={`bg-teal-700 w-full text-white p-3 py-4 rounded-lg flex flex-row justify-center items-center gap-3 cursor-pointer hover:bg-teal-900 ${
                loginIsSubmitting && "cursor-not-allowed opacity-50"
              }`}
            >
              <Spinner isLoading={loginIsSubmitting} />
              sign in
            </button>
          </div>
        </div>
      </form>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[500px] h-[500px] -top-[300px] -right-[300px]  "
      >
        <path
          // fill="#FFD6E8"
          fill="#ffedd5"
          d="M47.8,-63.7C61.5,-55.7,72,-41.3,79.1,-24.5C86.1,-7.8,89.6,11.2,83.8,26.7C78.1,42.2,63.1,54.2,47.5,63.3C32,72.5,16,78.8,-0.3,79.3C-16.7,79.8,-33.4,74.4,-48.4,65.1C-63.4,55.7,-76.6,42.5,-80.6,26.9C-84.7,11.4,-79.5,-6.4,-71,-20.1C-62.5,-33.9,-50.6,-43.7,-38.3,-52.1C-25.9,-60.4,-12.9,-67.5,2,-70.3C17,-73.1,34,-71.6,47.8,-63.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[500px] h-[500px] -bottom-[300px] -left-[300px]  "
      >
        <path
          fill="#A7F0BA"
          d="M47.8,-63.7C61.5,-55.7,72,-41.3,79.1,-24.5C86.1,-7.8,89.6,11.2,83.8,26.7C78.1,42.2,63.1,54.2,47.5,63.3C32,72.5,16,78.8,-0.3,79.3C-16.7,79.8,-33.4,74.4,-48.4,65.1C-63.4,55.7,-76.6,42.5,-80.6,26.9C-84.7,11.4,-79.5,-6.4,-71,-20.1C-62.5,-33.9,-50.6,-43.7,-38.3,-52.1C-25.9,-60.4,-12.9,-67.5,2,-70.3C17,-73.1,34,-71.6,47.8,-63.7Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Login;
