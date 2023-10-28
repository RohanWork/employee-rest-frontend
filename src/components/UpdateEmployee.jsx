import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, editEmployee } from "../services/EmployeeService";

const UpdateEmployee = () => {
  window.scroll(0,0);
  const { empid } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    empid: "",
    fname: "",
    lname: "",
    mailid: "",
    department: "",
    salary: "",
    location: "",
  });

 //   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetchData = async () => {
//       try {
//       //calling the get map (getEmployeeById(empid) method) from EmployeeService file
//         console.log("calling the get map (getEmployeeById(empid) method) from EmployeeService file");
//         const response = await getEmployeeById(employee.empid);
//         setEmployee(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [employee.empid]);

//   const updateEmployee = (e) => {
//     e.preventDefault();
//     console.log(employee);
//   //calling the get map (getEmployeeById(empid) method) from EmployeeService file
//     console.log("calling the put map (editEmployee(employee, id) method) from EmployeeService file");
//     editEmployee(employee, empid).then((response) => {
//         alert("Records updated successfully for ID " + empid);
//         navigate("/employeeList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const empidForMethod = parseInt(empid);
        const response = await getEmployeeById(empidForMethod);
        
        // Check if the response contains employee data because it contains 2 fields [0, 1] `0th` field is getAllEmployeeById records
        if (Array.isArray(response.data.getEmployeeById) && response.data.getEmployeeById.length > 0) {
          //removed console.log which contains the employee data
          setEmployee(response.data.getEmployeeById[0]);
        } else {
          // Handling the case where no employee data is found
          console.error("No employee data found for empid: " + empid);
          alert("No employee data found for the provided EmpId");
        }
      } catch (error) {
        console.error("An error occurred while fetching employee data:", error);
      }
    };
    fetchData();
  }, [empid]);


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      // Call the editEmployee method from EmployeeService file
      await editEmployee(employee);
      alert(`Records updated successfully for ID ${empid}`);
      navigate("/employeeList");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    // <>
    // <br/>
    // <br/>
    // <div className="flex max-w-2xl mx-auto shadow border-b">
    //   <div className="px-8 py-8">
    //     <div className="font-bold text-2xl">
    //       <h1>Update Employee Details for ID {employee.empid}</h1>
    //       <br></br>
    //     </div>
    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-bold">
    //         First Name
    //       </label>
    //       <input
    //         type="text"
    //         name="fname"
    //         value={employee.fname}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //     </div>
    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-bold">
    //         Last Name
    //       </label>
    //       <input
    //         type="text"
    //         name="lname"
    //         value={employee.lname}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //     </div>


    //   {/* Commented fields that are not used in this component (we are not using below fields from backend) */}
        
    //           {/* <div className="items-center justify-center h-14 w-full my-4">
    //             <label className="block text-gray-600 text-sm font-bold">
    //               Employee ID
    //             </label>
    //             <input
    //               type="number"
    //               name="empid"
    //               value={employee.empid}
    //               onChange={(e) => handleChange(e)}
    //               className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //           </div> */}
    //           {/* <div className="items-center justify-center h-14 w-full my-4">
    //             <label className="block text-gray-600 text-sm font-bold">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               name="mailid"
    //               value={employee.mailid}
    //               onChange={(e) => handleChange(e)}
    //               className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //           </div> */}
    //           {/* <div className="items-center justify-center h-14 w-full my-4">
    //             <label className="block text-gray-600 text-sm font-bold">
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               value={employee.password}
    //               onChange={(e) => handleChange(e)}
    //               className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //           </div> */}


    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-bold">
    //         Department
    //       </label>
    //       <input
    //         type="text"
    //         name="department"
    //         value={employee.department}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //     </div>
    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-bold">
    //         Salary
    //       </label>
    //       <input
    //         type="number"
    //         name="salary"
    //         value={employee.salary}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //     </div>
    //     <div className="items-center justify-center h-14 w-full my-4">
    //       <label className="block text-gray-600 text-sm font-bold">
    //         Location
    //       </label>
    //       <input
    //         type="text"
    //         name="location"
    //         value={employee.location}
    //         onChange={(e) => handleChange(e)}
    //         className="h-10 w-96 border mt-2 px-2 py-2"></input>
    //     </div>

    //     <div className="items-center justify-center h-14 my-4 space-x-4 pt-4">
    //       <button
    //         onClick={updateEmployee}
    //         className="rounded text-white font-semibold bg-green-600 hover:bg-green-500 py-2 px-6">
    //         Update
    //       </button>
    //       <button
    //         onClick={() => navigate("/EmployeeList")}
    //         className="rounded text-white font-semibold bg-red-600 hover:bg-red-500 py-2 px-6">
    //         Cancel
    //       </button>
    //     </div>
    //   </div>
    // </div>
    // </>

    <>
        <div className="flex items-center justify-center min-h-screen mt-10">
          <div className="w-full max-w-md px-8 py-8 border shadow-lg">
            <h1 className="text-3xl font-bold text-gray-600 mb-6 text-center">Update Employee Details <div className="text-base mt-5"> Employee ID {employee.empid}</div></h1>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">First Name</label>
              <input
                type="text"
                name="fname"
                value={employee.fname}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">Last Name</label>
              <input
                type="text"
                name="lname"
                value={employee.lname}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div>

            {/* Commented fields that are not used in this component (we are not using below fields from the backend) */}
            
            {/* <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">Employee ID</label>
              <input
                type="number"
                name="empid"
                value={employee.empid}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div> */}
            {/* <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">Email</label>
              <input
                type="email"
                name="mailid"
                value={employee.mailid}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div> */}
            {/* <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">Password</label>
              <input
                type="password"
                name="password"
                value={employee.password}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div> */}

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">Department</label>
              <input
                type="text"
                name="department"
                value={employee.department}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">Salary</label>
              <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold">Location</label>
              <input
                type="text"
                name="location"
                value={employee.location}
                onChange={(e) => handleChange(e)}
                className="w-full h-10 border px-2 py-2"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={updateEmployee}
                className="w-1/2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded"
              >
                Update
              </button>
              <button
                onClick={() => navigate("/EmployeeList")}
                className="w-1/2 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default UpdateEmployee;
