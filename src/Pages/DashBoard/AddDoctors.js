import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";

const AddDoctors = () => {
    const navigate = useNavigate();
  const {
    register,
    
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const {data: specialities, isLoading} = useQuery({
    queryKey: ['speciality'],
    queryFn: async () =>{
        const res = await fetch(`http://localhost:5000/appointmentSpeciality`)
        const data = await res.json();
        return data;

    }
  })
  const handleAddDoctors = data => {
    console.log(data);
    const image = data.image[0]
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
        console.log(imgData);
        if(imgData.success){
            const doctor = {
                name: data.name,
                email: data.email,
                speciality: data.speciality,
                image: imgData.data.url
            }
            console.log(doctor);
            //save doctor information

            fetch("http://localhost:5000/doctors", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
              },
              body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${doctor.name} is added successfully`);
                navigate('/dashboard/managedoctors')
            })
        }
    })
  }
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="w-96 p-7">
      <h2> Add a Doctors</h2>
      <form onSubmit={handleSubmit(handleAddDoctors)}>
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
            <span className="label-text">Speciality</span>
          </label>
          <select
          {...register('speciality')}
          className="select input-bordered w-full max-w-xs">
            {specialities?.map((speciality) => (
              <option key={speciality._id} value={speciality.name}>
                {speciality.name}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
          type='file'
            {...register("image")}
            className="input input-bordered w-full mx-auto max-w-xs"
            placeholder="image"
          />
        </div>
        <input
          className="btn btn-accent mt-5 w-full"
          value="Add a Doctors"
          type="submit"
        />
        {/* {signUpError && <p className="text-red-600">{signUpError} </p>} */}
      </form>
    </div>
  );
};

export default AddDoctors;
