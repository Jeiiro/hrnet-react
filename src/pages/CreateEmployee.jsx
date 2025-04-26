import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "@jeiiro/react-tailwind-modal";
import Input from "../components/Input";
import Select from "../components/Select";
import { addEmployee } from "../store/employeeSlice";
import { states } from "../data/states";

function CreateEmployee() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));
    setIsModalOpen(true);
  };

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal"
  ];

  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">HRnet</h1>
          <Link to="/employees" className="text-blue-700 hover:underline mb-6 block">
            View Current Employees
          </Link>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Create Employee</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required={true}
              />
              
              <Input
                id="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required={true}
              />
              
              <Input
                id="dateOfBirth"
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required={true}
              />
              
              <Input
                id="startDate"
                label="Start Date"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required={true}
              />
            </div>
            
            <fieldset className="border border-gray-300 rounded-lg p-4">
              <legend className="text-lg font-medium text-gray-700 px-2">Address</legend>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="street"
                  label="Street"
                  value={formData.street}
                  onChange={handleChange}
                  required={true}
                />
                
                <Input
                  id="city"
                  label="City"
                  value={formData.city}
                  onChange={handleChange}
                  required={true}
                />
                
                <Select
                  id="state"
                  label="State"
                  value={formData.state}
                  onChange={handleChange}
                  options={states}
                  required={true}
                />
                
                <Input
                  id="zipCode"
                  label="Zip Code"
                  type="number"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </fieldset>
            
            <Select
              id="department"
              label="Department"
              value={formData.department}
              onChange={handleChange}
              options={departments}
              required={true}
            />
            
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-lg transition"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-lg font-semibold text-gray-800">Employee Created!</h3>
      </Modal>
    </div>
  );
}

export default CreateEmployee;