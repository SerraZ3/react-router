import React from "react";
import { useNavigate } from "react-router-dom";
// import { Container } from './styles';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <span onClick={() => navigate("/admin")}>Ir para o admin</span>
    </div>
  );
}

export default Home;
