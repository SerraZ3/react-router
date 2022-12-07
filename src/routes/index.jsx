import React from "react";
import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Admin from "../pages/Admin";
import AdminUsers from "../pages/AdminUsers";
import AdminUsersShow from "../pages/AdminUsersShow";
import ToDoList from "../pages/ToDoList";

// import { Container } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        {/* <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<AdminUsers />} /> */}
        <Route path="admin">
          <Route index element={<Admin />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id" element={<AdminUsersShow />} />
        </Route>
      </RoutesDom>
    </BrowserRouter>
  );
}

export default Routes;
