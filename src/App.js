/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<Login />} />

            <Route path="/employeeList"        element={<EmployeeList />} />
            <Route path="/addEmployee"         element={<AddEmployee />} />
            <Route path="/editEmployee/:empid" element={<UpdateEmployee />} />
            <Route path="/contact"             element={<ContactForm/>} />

          </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}