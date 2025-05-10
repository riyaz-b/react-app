import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

const EmployeeList = ({ onEdit }) => {
    const { employees, deleteEmployee } = useContext(EmployeeContext);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(emp => (
                    <li key={emp.id}>
                        {emp.name} ({emp.tech})
                        <button onClick={() => onEdit(emp)}>Edit</button>
                        <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;