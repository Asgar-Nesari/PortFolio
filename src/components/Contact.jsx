import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bkkkqxwb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  };
  return (
    <>
      <hr />
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className=" text-3xl font-bold mb-4 ">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            className="bg-slate-300 w-70 md:w-96 px-8 py-6 rounded-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-xl font-semibold mb-4">Send Your message</h1>
            <div className="flex flex-col mb-4 space-y-1">
              <label className="block text-gray-700 ">Full Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Enter your fullname"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-slate-700 leading-tight focus:outline-none hover:scale-110 duration-300"
              />
              {errors.name && <span className="text-red-700">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4 space-y-1">
              <label className="block text-gray-700 ">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-slate-700 leading-tight focus:outline-none hover:scale-110 duration-300"
              />
              {errors.email && <span className="text-red-700">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4 space-y-1">
              <label className="block text-gray-700 ">Message</label>
              <textarea
                {...register("message", { required: true })}
                type="text"
                name="message"
                placeholder="Enter your message"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-slate-700 leading-tight focus:outline-none hover:scale-110 duration-300"
              />
              {errors.message && <span className="text-red-700">This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-slate-950 hover:bg-slate-700 text-white rounded-xl px-3 py-2 duration-300 hover:scale-110 "
            >
              send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
