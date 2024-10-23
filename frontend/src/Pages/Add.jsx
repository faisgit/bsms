import React, { useState } from "react";
import Input from "../components/Input";
import { useForm } from 'react-hook-form';
import Button from "../components/Button"
import { useAddData } from "../hooks/custom-hooks";
function Add() {
  const {addData} = useAddData()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    addData(data)
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-80 flex flex-col justify-center items-center gap-3 py-10 rounded-xl shadow-xl">
      <h1 className="font-bold text-xl">Add a Book</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Enter Book Name"
            label="Name"
            {...register("name", {
              required: true
            })}
          />
          <Input
            type="text"
            placeholder="Enter Author Name"
            label="Author"
            {...register("author", {
              required: true
            })}
          />
          <Input
            type="number"
            placeholder="Enter Book Price"
            label="Price"
            {...register("price", {
              required: true
            })}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Add;
