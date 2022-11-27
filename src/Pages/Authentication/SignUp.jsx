import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterImg from "../../Assets/Sign-up.svg";
import toast from 'react-hot-toast';
import { AuthContext } from "../../Contexts/AuthProvider";
import { getToken, getTokenForGmailLogin } from "../../Api/getToken";
import AuthenticationSpinner from "../Shared/Spinners/AuthenticationSpinner";

const SignUp = () => {
  const [error, setError] = useState(null);
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleUserSignUp = data => {
    createUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      getToken(user, data.role)
      updateUserProfile(data.name)
      .then(result =>{
        toast.success('User create successful', {duration: 3000})
        setLoading(false);
        navigate(from, { replace: true });
        setError(null)
      })
      .catch(err =>{
        console.error(err.message);
        setError(err.message)
        setLoading(false)
      })
    })
    .catch(err =>{
      console.error(err.message);
      setError(err.message)
      setLoading(false)
    })
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        getTokenForGmailLogin(user);
        toast.success('User sign in successful', {duration: 3000})
        navigate(from, { replace: true })
        setError(null)
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message)
        setLoading(false)
      });
  };

  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-[450px]" src={RegisterImg} alt="" />
        </div>
        <div className="card w-full md:max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-10">Sign up</h1>
          <form onSubmit={handleSubmit(handleUserSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Your name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email")}
                placeholder="Your email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                name="password"
                required
                placeholder="Your password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                defaultValue="Buyer"
                {...register("role")}
                className="select select-bordered w-full max-w-xs"
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>
            </div>
            <div className="text-red-500">
            <p>
              {error === "Firebase: Error (auth/email-already-in-use)." &&
                "Email already in use"}
            </p>
            <p>
              {error ===
                "Firebase: Password should be at least 6 characters (auth/weak-password)." &&
                "Password must be atleast 6 characters long."}
            </p>
          </div>
            <button
                type="submit"
                className="btn bg-red-700 hover:bg-red-600 border-none"
              >
                {loading ? <AuthenticationSpinner /> : "Sign Up"}
              </button>
          </form>
          <div className="mb-10">
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4 mt-5">
              <button
                onClick={handleGoogleLogin}
                aria-label="Log in with Google"
                className="p-3 flex text-center rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="text-md text-center sm:px-6 text-gray-600">
              Already have an account?{" "}
              <button className="underline text-gray-800" type="submit">
                <Link to="/signIn">Sign In</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
