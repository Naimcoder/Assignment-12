import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import {  Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UseContext";
import signup from "../../../image/login.gif";
import SmallSpnner from "../SmallSpnner/SmallSpnner";

const Register = () => {
  const { createUser, updateName, user, loader, setLoader, signInWithGoogle} =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleRegisetSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        updateName(data.name, user?.photoURL)
          .then(() => {
            saveUser(data.name,data.user,data.select)
            navigate("/");
            toast.success("Successfully UpdateName");
          })
          .catch((error) => console.log(error));
        toast.success("successfully Register");
      })
      .catch((err) => {
        setLoader(false);
        toast.error(err.message);
      });
  };

  const handleGoogle=()=>{
    signInWithGoogle()
    .then(()=>{
      navigate("/");
    })
    .catch(error=>console.log(error))
  }

  const saveUser=(name,email,selects)=>{
    const user= {name,email,selects}
    fetch(`http://localhost:8000/users`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
     
    })
  }
  return (
    <div className="lg:flex container mx-auto mt-14">
      <div className="mt-6">
        <img src={signup} alt="" />
      </div>
      <div className="lg:w-2/6 bg-slate-300 p-10 rounded shadow-lg my-10 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit(handleRegisetSubmit)}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlhtmlFor="name"
              className="inline-block mb-1 text-lg font-medium"
            >
              Name
            </label>
            <input
              placeholder="Your Name"
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && <p>{errors?.name.message}</p>}
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlhtmlFor="email"
              className="inline-block mb-1 text-lg font-medium"
            >
              E-mail
            </label>
            <input
              placeholder="Your Email Address"
              type="email"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("email", {
                required: true,
              })}
            />
          </div>

          <div className="mb-1">
            <select  {...register("select", {
                required: true,
              })}
               className="select select-bordered w-full">
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlhtmlFor="password"
              className="inline-block text-lg mb-1 font-medium"
            >
              Password
            </label>
            <input
              placeholder="Enter Your Password"
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "password must be 6 Characters longer",
                },
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors?.password.message}</p>
            )}
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md uppercase  bg-blue-600 focus:shadow-outline focus:outline-none"
            >
              {loader ? <SmallSpnner></SmallSpnner> : "Sign Up"}
            </button>
          </div>
          <p className="text-xs text-black sm:text-sm">
            Already have an account?{" "}
            <Link className=" text-blue-500 font-medium underline" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
        <p className="px-3  font-medium text-lg text-center py-6 dark:text-gray-400">
          Login with social accounts
        </p>
        <div>
          <button
           onClick={handleGoogle}
            type="button"
            class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <span className="text-2xl text-white ">
              <FaGoogle></FaGoogle>
            </span>

            <span class="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
