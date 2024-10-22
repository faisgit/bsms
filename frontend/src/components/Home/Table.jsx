import React from "react";
import { Link } from "react-router-dom";

function Table({ data }) {
  let id = 0;
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
            id++
            return(
            <tr>
              <th>{id}</th>
              <td>{data.name}</td>
              <td>{data.author}</td>
              <td>{data.price}</td>
              <td>
                <Link to={`/delete/${data._id}`}>Delete</Link>
              </td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
