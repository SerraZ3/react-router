import React from "react";
import { useParams } from "react-router-dom";

// import { Container } from './styles';

function AdminUsersShow() {
  const { id } = useParams();
  return (
    <div>
      <h1>AdminUsersShow {id}</h1>
    </div>
  );
}

export default AdminUsersShow;
