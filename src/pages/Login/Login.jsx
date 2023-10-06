import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {


  const {SignIn} = useContext(AuthContext);
  const location =useLocation();
  const navigate = useNavigate();

    const handleLogin =(e)=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        
        console.log(form.get('email'))

        SignIn(email,password)
        .then(
          navigate(location?.state ? location.state: '/')
        )
        .catch()

    }


  return (
    
    <div>
      
      <Navbar></Navbar>
      
      
      <div className="hero min-h-screen bg-base-200">
      

        <form
      onSubmit={handleLogin}
        className="card-body">

        <h1 className="text-center font-bold text-5xl">Please Log in </h1>
     
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
           
            className="btn btn-primary">Login</button>
          </div>

          <p className="text-center mt-4">Dont have an account <Link 
          className="text-blue-700 font-bold"
          to='/register' >Register</Link></p>
        </form>



      </div>

      
    </div>
  );
};

export default Login;
