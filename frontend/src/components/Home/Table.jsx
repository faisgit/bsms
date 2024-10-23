import React from "react";
import { Link } from "react-router-dom";
import { useDeleteData, useGetAllData } from "../../hooks/custom-hooks";

function Table({ data }) {
  let id = 0;
  const { deleteData } = useDeleteData()
  const handleClick =  async (id) => {
    if (id) {
      await deleteData(id)
      window.location.reload()
    }
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Book Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            id++;
            return (
              <tr key={data._id}>
                <th>{id}</th>
                <td>{data.name}</td>
                <td>{data.author}</td>
                <td>{data.price}</td>
                <td className="flex gap-2">
                  <button onClick={() => handleClick(data._id)} className="hover">Delete</button>
                    |  
                  <Link to={`update/${data._id}`} className=" hover:underline">Update</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
