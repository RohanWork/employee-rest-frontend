/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService, { getEmployees, deleteEmployee } from "../services/EmployeeService";
import Employee from "./Employee";
import JumboHeader from "./Banner";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  // const [employees, setEmployees] = useState(null);
  const [employees, setEmployees] = useState([]);


  // useEffect(() => {
  //   window.scrollTo(50, 120);
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //     //calling the get map (getEmployees() method) from EmployeeService file
  //       console.log("calling the get map (getEmployees() method) from EmployeeService file");
  //       const response = await getEmployees();
  //       console.log("response: " + response);
        

  //       console.log("\n\n\n");
  //       const resp = await getEmployees();
  //       console.log(resp.data.getAllEmployees); // Log the entire response object
  //       const employeesArray = resp.data;
  //       console.log(employeesArray); // Log the array of employees
  //       console.log("\n\n\n");


  //       if (Array.isArray(resp)) 
  //       {
  //         setEmployees(resp.data);
  //       }else{
  //         console.log("API response does not contain an array of employees")
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);




  useEffect(() => {
    window.scrollTo(50, 120);
    const fetchData = async () => {
      setLoading(true);
      try {
        // Calling the get map (getEmployees() method) from EmployeeService file
        const response = await getEmployees();
        console.log("response: " + JSON.stringify(response.data, null, 2));
  
        if (Array.isArray(response.data.getAllEmployees)) {
          setEmployees(response.data.getAllEmployees);
        } else {
          console.log("API response does not contain an array of employees");
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  




  const deleteEmpFun = (e, empid) => {
      e.preventDefault();
    //calling the delete map (deleteEmployees() method) from EmployeeService file
      console.log("calling the delete map (deleteEmployees() method) from EmployeeService file");
      try{
      deleteEmployee(empid).then((response) => {
          if(response) {
              setEmployees((prevElement) => {
                  return prevElement.filter((response) => response.empid !== empid);
              });
              alert("Employee with " + empid + " id deleted successfully");
          }
      });
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        console.error("Server Error:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Request setup error:", error.message);
      }
      console.error("Axios error config:", error.config);
    }
  }

  return (
    <>
    <JumboHeader/>

    {/* flex justify-center */}
    <div className="container my-8 App-Item">
      <div className="container mt-10 h-full">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-yellow-400 text-white px-6 py-2 font-semibold ">
          Register New Employee
        </button>
      </div>

      {/* <div className="flex shadow border-b"> */}
      {/* <div className="overflow-x-auto"> */}
        <table className="min-w-full table-auto mt-8">
          <thead className="bg-gray-400">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-black-500 tracking-wider">Employee ID</th>
              <th className="px-4 py-3 text-left font-bold text-black-500 tracking-wider">First Name</th>
              <th className="px-4 py-3 text-left font-bold text-black-500 tracking-wider">Last Name</th>
              <th className="px-4 py-3 text-center font-bold text-black-500 tracking-wider">Email ID</th>
              <th className="px-4 py-3 text-left font-bold text-black-500 tracking-wider">Department</th>
              <th className="px-4 py-3 text-left font-bold text-black-500 tracking-wider">Salary</th>
              <th className="px-4 py-3 text-left font-bold text-black-500 tracking-wider">Location</th>
              <th className="px-6 py-3 text-center font-bold text-black-500 tracking-wider">Actions</th>
            </tr>
          </thead>
          {!loading && (
              <tbody>
                  {employees.map((employee) => (
                      <Employee 
                      employee={employee}
                      deleteEmpFun={deleteEmpFun} 
                      key={employee.empid}></Employee>
                  ))}
              </tbody>
          )}

          {/* <tbody>
            {employees && !loading && employees.map((employees) => (
              <Employee 
                employees={employees}
                deleteEmpFun={deleteEmpFun} 
                key={employees.empid}
              />
            ))}
          </tbody> */}

        </table>
      {/* </div> */}
      {/* </div> */}
    </div>
    </>
  );
};

export default EmployeeList;
