import React, { useContext,} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Context/UseContext';
import signup from '../../../image/login.gif'


const Register = () => {
  const{createUser,updateName,user}=useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate= useNavigate()
 
  const handleRegisetSubmit=data=>{
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
      const users= result.user
      console.log(users)
      updateName(data.name,user?.photoURL)
      .then(()=>{
         toast.success('Successfully UpdateName')
      })
      .catch(error=>console.log(error))
      toast.success('successfully Register')
      navigate('/')
    })
    .catch(err=>{
      toast.error(err.message)
      console.log(err)
    })
  }
    return (
       <div className='flex container mx-auto mt-14'>
        <div className='mt-6'>
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
              {...register('name',{
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
              {...register('email',{
                required:true
              })}
            />

          </div>

          <div className='mb-1'>
          <p className='inline-block mb-1 text-lg font-medium'>Photo</p>
          <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-2 text-center bg-white border-2 border-dashed rounded-md cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                <input id="dropzone-file" type="file" className="hidden" />
            </label>
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
             {...register('password',{
              required: true,
              minLength:{value:8,message:'password must be 6 Characters longer' },
              pattern: {value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message:'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'}
             })}
            />
            {errors.password && <p className='text-red-500'>{errors?.password.message}</p>}
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md uppercase  bg-blue-600 focus:shadow-outline focus:outline-none"
            >
              Sign Up
            </button>
          </div>
          <p className="text-xs text-black sm:text-sm">
          Already have an account? <Link className=" text-blue-500 font-medium underline" to="/login"> Login</Link>
          </p>
        </form>
        <p className="px-3  font-medium text-lg text-center py-6 dark:text-gray-400">
          Login with social accounts
        </p>
        <div>
        <button type="button" class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
        <span className="text-2xl text-white ">
        <FaGoogle></FaGoogle>
        </span>
         
            <span class="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
        </div>
        <div className="flex  justify-center items-center">
          <div>
            <button className="mr-3 h-10 w-10  bg-amber-700 flex justify-center items-center rounded">
              <span className="text-2xl text-white ">
               
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

export default Register;