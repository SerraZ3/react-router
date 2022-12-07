import React from "react";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

function Admin() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Admin</h1>
      <span onClick={() => navigate(-1)}>voltar</span>
    </div>
  );
}

export default Admin;
