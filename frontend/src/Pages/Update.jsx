import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetDataById, useUpdateData } from "../hooks/custom-hooks";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";

function Update() {
  const { getDataById, data } = useGetDataById();
  const {updateData} = useUpdateData()
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: data.name,
      author: data.author,
      price: data.price,
    },
  });

  useEffect(() => {
    getDataById(id);
  }, []);

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("author", data.author);
      setValue("price", data.price);
    }
  }, [data, setValue]);

  console.log(data);

  const onSubmit = (data) => {
    updateData(data, id)
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
              required: true,
            })}
          />
          <Input
            type="text"
            placeholder="Enter Author Name"
            label="Author"
            {...register("author", {
              required: true,
            })}
          />
          <Input
            type="number"
            placeholder="Enter Book Price"
            label="Price"
            {...register("price", {
              required: true,
            })}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Update;
