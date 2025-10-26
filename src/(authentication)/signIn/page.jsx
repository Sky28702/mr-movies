import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/movies";

function SignIn() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("Current User");
    if (localData) {
      navigate("/");
    }
  }, [navigate]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data) {
    let result = await login(data, setError, setErrorMessage);

    console.log("Login result:", result);
    if (error === true) {
      //set current user
      localStorage.setItem("Current User", JSON.stringify(result.data.user));

      //navigate to home
      navigate("/");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <form
        className="text-center flex flex-col justify-between items-center  bg-slate-950 mx-6 w-110 rounded-[6px] p-10 shadow shadow-indigo-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-medium text-3xl mb-6">Login</h1>
        <input
          type="text"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="User Name"
          {...register("userName", {
            required: "UserName is required",
          })}
        />
        {errors.userName && (
          <p className="text-red-600 mb-4 mt-[-10px]">
            {errors.userName.message}
          </p>
        )}
        <input
          type="password"
          className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-red-600 mb-4 mt-[-10px]">
            {errors.password.message}
          </p>
        )}

        <p
          className={`text-center mb-4 ${
            error === false ? "text-red-500" : "text-green-500"
          }`}
        >
          {errorMessage}
        </p>

        <p className="mb-6">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="cursor-pointer text-blue-400">signup</span>
          </Link>
        </p>
        <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;
