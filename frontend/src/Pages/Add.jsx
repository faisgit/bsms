import React, { useState } from "react";
import Input from "../components/Input";
import {useForm }from 'react-hook-form'
function Add() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>


      <Input type="text" placeholder="Enter Your Name" label="Name"  {...register("name", {
          required : true
        })} />
      <Input
        type="number"
        placeholder="Enter Your Number"
        label="Number"
        {...register("number", {
          required : true
        })}
      />
      <button>Sunmit</button>
      </form>
    </div>
  );
}

export default Add;
