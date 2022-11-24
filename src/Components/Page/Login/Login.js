import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UseContext";
import login  from '../../../image/login.gif'
const Login = () => {
  const { signIn, signInWithGoogle, passwordReset } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        toast.success("successfully login");
      })
      .catch((error) => console.log(error));
  };

  // goole sign in
  const googleSignIn = () => {
    signInWithGoogle()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  // reset password
  const resetPasswords = () => {
    passwordReset(userEmail)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Please Cheack Your Email");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex  justify-center container mx-auto">
        <div className="mt-6">
            <img src={login} alt="" />
        </div>
      <div className="w-2/6 bg-slate-300 p-10 rounded shadow-lg my-10 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm  text-gray-900">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="email"
              className="inline-block mb-1 text-lg font-medium"
            >
              E-mail
            </label>
            <input
              placeholder="Your Email Address"
              type="email"
              onBlur={(event) => setUserEmail(event.target.value)}
              {...register("email", { required: "Email Address is required" })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="password"
              className="inline-block text-lg mb-1 font-medium"
            >
              Password
            </label>
            <input
              placeholder="Enter Your Password"
              type="password"
              {...register("password", {
                required: "password is Required",
                minLength: {
                  value: 8,
                  message: "password must be 6 Characters longer",
                },
              })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password?.message}</p>
            )}
          </div>
          <div>
            <button
              onClick={resetPasswords}
              className="mt-0 pt-0 hover:underline"
            >
              Forgot Password ?
            </button>
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md uppercase  bg-blue-600 focus:shadow-outline focus:outline-none"
            >
              Login
            </button>
          </div>
          <p className="text-xs text-black sm:text-sm">
            New to Doctors Portal?{" "}
            <Link
              className=" text-blue-500 font-medium underline"
              to="/register"
            >
              Create new account
            </Link>
          </p>
        </form>
        <p className="px-3  font-medium text-lg text-center py-6 dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex  justify-center items-center">
          <div>
            <button
              onClick={googleSignIn}
              className="mr-3 h-10 w-10  bg-amber-700 flex justify-center items-center rounded"
            >
              <span className="text-2xl text-white ">
                <FaGoogle></FaGoogle>
              </span>
            </button>
          </div>
          <div>
            <button className="mr-3 h-10 w-10  bg-black flex justify-center items-center rounded">
              <span className="text-2xl text-white ">
                <FaGithub></FaGithub>
              </span>
            </button>
          </div>
          <div>
            <button className="mr-3 h-10 w-10  bg-blue-600 flex justify-center items-center rounded">
              <span className="text-2xl text-white ">
                <FaFacebookF></FaFacebookF>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
