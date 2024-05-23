/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, profile } = useContext(AuthContext);
  // const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const photo = form.photo.value;
    const role = "user";

    const userInfo = { name, email, password, role };
    // console.log(userInfo);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        profile(name);
        // axiosPublic.post('/user', userInfo)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             Swal.fire({
        //                 title: "Good job !",
        //                 text: "You you have successfully register !",
        //                 icon: "success"
        //             });
        //         }
        //     })
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
          Register
        </h1>
        <form onSubmit={handleRegister}>
          <div className="w-full mb-3">
            <label className="font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input input-bordered border-none w-full focus:outline-none rounded"
              required
            />
          </div>
          <div className="w-full mb-3">
            <label className="font-medium text-white">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              className="input input-bordered border-none w-full focus:outline-none rounded"
              required
            />
          </div>
          <div className="w-full mb-3">
            <label className="font-medium text-white">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Your Password"
              className="input input-bordered border-none w-full focus:outline-none rounded"
              required
            />
          </div>
          <button className="btn bg-yellow-200 w-full font-bold text-green-900 mt-5 hover:bg-yellow-200 rounded">
            Register
          </button>
          <p className="text-center text-sm text-white mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-200">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
