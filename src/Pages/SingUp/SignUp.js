import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        toast("New user has created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setSignUpError(error);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg text-gray-800">
        <h2 className="text-4xl font-bold text-center">Sign Up</h2>
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="name" className="block text-gray-700 font-medium ">
              Name
            </label>
            <input
              {...register("name", {
                required: "Please provide your beautiful name",
              })}
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-800 bg-white text-gray-800"
            />
            {errors.name && (
              <p className="text-red-500" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block text-gray-700 font-medium ">
              Email
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-800 bg-white text-gray-800"
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              {...register("password", {
                required: "Please provide your password",
                minLength: {
                  value: 7,
                  message: "min length is 7",
                },
              })}
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-800 bg-white text-gray-800"
            />
            {errors.password && (
              <span className="text-red-500" role="alert">
                {errors.password.message}
              </span>
            )}
            {signUpError && (
              <span className="text-red-500" role="alert">
                {signUpError}
              </span>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-md text-white bg-gray-800 font-medium border-2 border-gray-800 hover:bg-white hover:text-gray-800">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-500">
          Already have an Account?{" "}
          <Link to="/login" className="underline text-emerald-300">
            Log In
          </Link>
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">OR</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center ">
          <button className="block w-full p-3 text-center rounded-md border-2 border-gray-800 text-gray-800 bg-white font-medium hover:bg-gray-800 hover:text-white">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
