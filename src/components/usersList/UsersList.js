import React from "react";
import { Table } from "react-bootstrap";
import UsersRow from "./UsersRow";
import "bootstrap/dist/css/bootstrap.min.css";

const UsersList = ({ users }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((el) => (
          <UsersRow key={el.id} el={el} />
        ))}
      </tbody>
    </Table>
  );
};

export default UsersList;
