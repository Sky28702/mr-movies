import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/movies";

function SignUp() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // api = http://localhost:8000/signup

  useEffect(() => {
    const localData = localStorage.getItem("Current User");
    if (localData) {
      navigate("/");
    }
  }, [navigate]);

  const [registerSuccess, setRegisterSuccess] = useState("");
  const [successState, setSuccessState] = useState(null);

  async function onSubmit(data) {
    // if (!selectedImage) {
    //   toast.error("Profile Picture is required");
    //   return;
    // }

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("userName", data.userName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    // formData.append("image", data.image);

    // let result = await signup(formData);
    // router.push("/sign-in");
    // console.log(result);
    signUp(data, setRegisterSuccess, setSuccessState);
  }

  return (
    <section className="flex justify-center-safe items-center h-screen text-white">
      <div className="text-white flex justify-center flex-col items-center">
        <form
          className="text-center flex flex-col justify-between items-center bg-slate-950 mx-6 w-110 rounded-[6px] p-10 shadow shadow-indigo-900"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-bold text-2xl mb-8"> REGISTER </h1>

          {/* // ! pfp if want  */}
          {/* <label htmlFor="inputFile">
          <img
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : "/profilePlaceholder.png"
            }
            className="h-28 w-28 mb-4 rounded-full object-cover cursor-pointer"
            alt="Profile Preview"
          />
        </label>
        
        <input
          type="file"
          id="inputFile"
          className="mb-4 text-white hidden"
          onChange={handleImageChange}

           
        /> */}

          <div className="flex flex-row justify-between gap-2 items-center">
            <input
              type="text"
              placeholder="First Name"
              className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
              {...register("firstName", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            ></input>

            <input
              type="text"
              placeholder="last Name"
              className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
              {...register("lastName", {
                required: "Last Name is required",
                minLength: {
                  value: 3,
                  message: " Last Name must be at least 3 characters",
                },
              })}
            ></input>
          </div>
          {errors.firstName && (
            <p className="text-red-600 mb-4 mt-[-10px]">
              {errors.firstName.message}
            </p>
          )}

          <input
            type="text"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            placeholder="User Name"
            {...register("userName", {
              required: "UserName is required",
              minLength: {
                value: 3,
                message: " UserName must be at least 5 characters",
              },
            })}
          />
          {errors.userName && (
            <p className="text-red-600 mb-4 mt-[-10px]">
              {errors.userName.message}
            </p>
          )}
          <input
            type="email"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            placeholder="email@abc.com"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-red-600 mb-4 mt-[-10px]">
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            className="border border-slate-800 py-2 px-2 w-full rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-900"
            placeholder="Password (at least 6 charachter)"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: " Password must be at least 6 characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-600 mb-4 mt-[-10px]">
              {errors.password.message}
            </p>
          )}

          <p className="mb-4">
            Already have an account?{" "}
            <Link href="/sign-in">
              <span className="cursor-pointer text-blue-400">Login</span>
            </Link>
          </p>

          <p
            className={`mb-6  ${
              successState === true ? `text-green-500` : `text-red-500`
            }`}
          >
            {registerSuccess}
          </p>

          <button className="bg-slate-700 text-[18px] py-2 px-6 rounded-2xl shadow shadow-indigo-950 cursor-pointer">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
export default SignUp;
