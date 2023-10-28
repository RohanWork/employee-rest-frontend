import React from "react";
import { useNavigate } from "react-router-dom";

// const Employee = ({ employees, deleteEmpFun }) => {
//   const navigate = useNavigate();
//   const editEmployee = (e, empid) => {
//     e.preventDefault();
//     navigate(`/editEmployee/${empid}`);
//   };

//   return (
//     <tr key={employees.empid}>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm  text-gray-100">{employees.fname}</div>
//       </td>
//       <td className="text-left px-4 py-4 whitespace-nowrap">
//         <div className="text-sm  text-gray-100">{employees.lname}</div>
//       </td>
//       <td className="text-left px-4 py-4 whitespace-nowrap">
//         <div className="text-sm  text-gray-100">{employees.empid}</div>
//       </td>
//       <td className="text-left px-4 py-4 whitespace-nowrap">
//         <div className="text-sm  text-gray-100">{employees.mailid}</div>
//       </td>
//       <td className="text-left px-4 py-4 whitespace-nowrap">
//         <div className="text-sm  text-gray-100">{employees.department}</div>
//       </td>
//       <td className="text-left px-4 py-4 whitespace-nowrap">
//         <div className="text-sm  text-gray-100">{employees.salary}</div>
//       </td>
//       <td className="text-left px-4 py-4 whitespace-nowrap">
//         <div className="text-sm  text-gray-100">{employees.location}</div>
//       </td>
//       <td className="text-center px-4 py-4 whitespace-nowrap text-sm">
//         <button
//           onClick={(e) => editEmployee(e, employees.empid)}
//           className="text-indigo-600 font-bold hover:text-indigo-800 px-4 hover:cursor-pointer">
//           Update
//         </button>
//         <button
//           onClick={(e) => deleteEmpFun(e, employees.empid)}
//           className="text-red-600 font-bold hover:text-red-800 hover:cursor-pointer">
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default Employee;




const Employee = ({ employee, deleteEmpFun }) => {
  const navigate = useNavigate();
  const editEmployee = (e, empid) => {
    e.preventDefault();
    navigate(`/editEmployee/${empid}`);
  };

  return (
    <tr key={employee.empid}>
    <td className="px-4 py-4 whitespace-nowrap">
      {/* <div className="text-sm  text-gray-500 font-bold">Emp ID:</div> */}
      <div className="text-sm  text-gray-1000">{employee.empid}</div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap">
      {/* <div className="text-sm  text-gray-500 font-bold">First Name:</div> */}
      <div className="text-sm  text-gray-1000">{employee.fname}</div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap">
      {/* <div className="text-sm  text-gray-500 font-bold">Last Name:</div> */}
      <div className="text-sm  text-gray-1000">{employee.lname}</div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap">
      {/* <div className="text-sm  text-gray-500 font-bold">Email ID:</div> */}
      <div className="text-sm  text-gray-1000">{employee.mailid}</div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap">
      {/* <div className="text-sm  text-gray-500 font-bold">Department:</div> */}
      <div className="text-sm  text-gray-1000">{employee.department}</div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap">
      {/* <div className="text-sm  text-gray-500 font-bold">Salary:</div> */}
      <div className="text-sm  text-gray-1000">{employee.salary}</div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap">
      {/* <div className="text-sm  text-gray-500 font-bold">Location:</div> */}
      <div className="text-sm  text-gray-1000">{employee.location}</div>
    </td>
    <td className="px-4 py-4 whitespace-nowrap text-center">
      <button
        onClick={(e) => editEmployee(e, employee.empid)}
        className="text-indigo-600 font-bold hover:bg-indigo-800 hover:text-white px-2 hover:cursor-pointer outline mr-2">
        Update
      </button>
      <button
        onClick={(e) => deleteEmpFun(e, employee.empid)}
        className="text-red-600 font-bold hover:bg-red-800 hover:text-white px-3 hover:cursor-pointer outline">
        Delete
      </button>
    </td>
  </tr>
  );
};

export default Employee;
