import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

/**
 * EmployeeManagement component.
 * 
 * This component serves as the main container for managing employees. It includes
 * functionality for editing employee details and displays both an employee form
 * and a list of employees.
 * 
 * @component
 * @returns {JSX.Element} The rendered EmployeeManagement component.
 */
const EmployeeManagement = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeForm
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
            />
            <EmployeeList onEdit={handleEdit} />
        </div>
    );
};

export default EmployeeManagement;