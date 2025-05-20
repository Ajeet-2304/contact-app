import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
// import { useState } from "react";
import EditUser from "./pages/EditUser";
import ShowUser from "./pages/ShowUser";
import DeleteUser from "./pages/deleteUser";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/createUser" element={<CreateUser/>} />
        <Route path="/deleteUser/:id" element={<DeleteUser/>} />
        <Route path="/editUser/:id" element={<EditUser/>} />
        <Route path="/showUser/:id" element={<ShowUser/>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
