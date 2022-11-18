import React from "react";

const UsersRow = ({ el }) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.username}</td>
      <td>{el.email}</td>
      <td>{`${el.address.suite}, ${el.address.street}, ${el.address.city}`}</td>
    </tr>
  );
};

export default UsersRow;
