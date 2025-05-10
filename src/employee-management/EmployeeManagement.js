import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

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