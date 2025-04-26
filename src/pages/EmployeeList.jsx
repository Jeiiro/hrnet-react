
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";

function EmployeeList() {
  const employees = useSelector((state) => state.employees);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => {
    const searchString = `${employee.firstName} ${employee.lastName} ${employee.department}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  const columns = [
    { key: "firstName", header: "First Name" },
    { key: "lastName", header: "Last Name" },
    { key: "startDate", header: "Start Date" },
    { key: "department", header: "Department" },
    { key: "dateOfBirth", header: "Date of Birth" },
    { key: "street", header: "Street" },
    { key: "city", header: "City" },
    { key: "state", header: "State" },
    { key: "zipCode", header: "Zip Code" }
  ];

  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">HRnet</h1>
          <Link to="/" className="text-blue-700 hover:underline mb-6 block">
            Create Employee
          </Link>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Current Employees</h2>
          
          <SearchBar 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search employees..."
          />
          
          <Table 
            data={filteredEmployees}
            columns={columns}
            emptyMessage="No employees found"
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;