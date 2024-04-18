import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import swal from "sweetalert";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [registerError, setRegisterError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { createUser, updateUserProfile,setUser } = UseAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const photoUrl = form.get("photoUrl");
    const name = form.get("name");
    console.log(email, password, photoUrl, name);
    // e.target.elements.email.value = "";
    //     e.target.elements.password.value = "";
    //     e.target.elements.photoUrl.value = "";
    //     e.target.elements.name.value = "";
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      swal(
        "Oops!",
        "Password should be at least 6 characters or longer. Please try again.",
        "error"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your password should contain a  uppercase letter");
      swal(
        "Oops!",
        "Your password should contain a  uppercase letter",
        "error"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Your password should contain a  lowercase letter");
      swal(
        "Oops!",
        "Your password should contain a  lowercase letter",
        "error"
      );
      return;
    }
    setRegisterError("");
    createUser(email, password)
      .then(() => {
        updateUserProfile(name,photoUrl)
        .then(()=>{
          setUser({displayName : name, photoURL : photoUrl})
            navigate(from)
    
        })
      
        
        swal("Good job!", "Successfully Registered!","success");
        
      })

      



      .catch((error) => {
        console.error(error);
        swal(
          "Oops!",
          "An error occurred during registration. Please try again.",
          "error"
        );
      });
  };
  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                className="input input-bordered"
                required
              />
            </div>

            <div className="relative">
            <input
              className="border-2 px-4 py-2 w-3/4 border-gray-400 m-2 rounded-md"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              span
              id=""
            />
            <span
              className="absolute top-5 text-2xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ?<FaRegEye />  : <FaRegEyeSlash /> }
            </span>
          </div>
            {registerError && <p className="text-red-700">{registerError}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an account? Please{" "}
              <span className="text-primary font-bold">
                <Link to="/login">Sign in</Link>
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
