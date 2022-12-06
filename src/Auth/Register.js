import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContexts } from '../Contexts/AuthProvider';
import useToken from '../hooks/useToken';



const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { createUser, updateUser } = useContext(AuthContexts);
  const [signUpError, setSignUpError] = useState('');
  const [createdUser, setCreatedUser] = useState('');
  const [token] = useToken(createdUser)

if(token){
  navigate('/')
}
      const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          toast.success('user created successfully')
          const userInfo = {
            displayName: data.name
          }
          updateUser(userInfo)
          .then(() => {
            // navigate("/");
            saveUser(data.name, data.email)
          } )

          .catch(error => console.error(error))
        })
        .catch(error => {
         setSignUpError(error.message)
          console.error(error);
        })
      }

const saveUser = (name, email) => {
  const user = {name, email};
  fetch("http://localhost:5000/users",
  {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
   
  setCreatedUser(email);
  // getUserToken(email)
   
  })

}
// const getUserToken = (email) =>{
//   fetch(`http://localhost:5000/jwt?email=${email}`)
//   .then(res => res.json())
//   .then(data =>{
//     console.log(data);
//     if(data.accessToken){
//       localStorage.setItem('accessToken', data.accessToken);
//        navigate("/");
//     }
//   })
// }
    return (
      <div className="h-[800px] flex justify-center items-center ">
        <div className="w-96 p-7">
          <h2 className="text-4xl"> register</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                {...register("name")}
                className="input input-bordered w-full mx-auto max-w-xs"
                placeholder="name"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full mx-auto max-w-xs"
                placeholder="email"
              />
              {errors.email && (
                <p className="text-orange-500 font-semibold" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: "password is required",
                minLength: {value: 6, message: 'password 6 character require'},
                // pattern: { value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/, message: 'password must be stronge'}
              })}
                className="input input-bordered w-full mx-auto max-w-xs"
                placeholder="password"
              />
              {errors.password && (
                <p className="text-orange-500 font-semibold" role="alert">
                  {/* {errors.password?.message} */}
                </p>
              )}
              <label className="label">
                <span className="label-text">forget password</span>
              </label>
            </div>
            <input
              className="btn btn-accent w-full"
              value="register"
              type="submit"
            />
            {
              signUpError && <p className='text-red-600'>{signUpError} </p>
            }
          </form>
          <p>
            {" "}
            already have an account? please login{" "}
            <Link to="/login">
              {" "}
              <span className="text-orange-500 font-semibold">login</span>
            </Link>
          </p>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full">
              login with google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Register;