/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { googleLogin, signIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const usersInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          role: "user",
        };
        axiosPublic.post('/user', usersInfo)
            .then(res => {
                console.log(res.data);
            })
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Good job !",
          text: "You you have successfully login !",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:w-[500px] md:w-[500px] w-full lg:p-10 md:p-10 p-5 bg-green-900 rounded mx-5">
        <h1 className="text-center text-3xl font-bold mb-3 text-yellow-200">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="w-full mb-3">
            <label className="font-medium text-white">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              className="input input-bordered border-none w-full focus:outline-none rounded"
            />
          </div>
          <div className="w-full mb-3">
            <label className="font-medium text-white">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Your Password"
              className="input input-bordered border-none w-full focus:outline-none rounded"
            />
          </div>
          <button className="btn bg-yellow-200 w-full font-bold text-green-900 mt-5 hover:bg-yellow-200 rounded">
            Login
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-yellow-200 w-full font-bold text-green-900 mt-7 hover:bg-yellow-200 rounded"
          >
            Google Login <img className="w-8" src={google} alt="" />
          </button>
          <p className="text-center text-sm text-white mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-200">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
