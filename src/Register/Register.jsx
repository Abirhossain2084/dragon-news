import { Link } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext);



  //form control
    const handleRegister =(e)=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');

        console.log(email,password,name,photo)


        //create user

        createUser(email,password)
        .then(result=>{
          console.log(result)
        })
        .catch(error =>{
          console.log(error)
        })
      

    }
    return (
        <div>
      
        <Navbar></Navbar>
        
        
        <div className="hero min-h-screen bg-base-200">
        
  
          <form
        onSubmit={handleRegister}
          className="card-body">
  
          <h1 className="text-center font-bold text-5xl">Please Register </h1>
       
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              
              />
            </div>
       
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phot URL</span>
              </label>
              <input
              name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
               
              />
            </div>
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
             
              className="btn btn-primary">Register</button>
            </div>
  
            <p className="text-center mt-4">Already have an account <Link 
            className="text-blue-700 font-bold"
            to='/login' >Login</Link></p>
          </form>
  
  
  
        </div>
  
        
      </div>
    );
};

export default Register;