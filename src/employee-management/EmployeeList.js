import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

/**
 * EmployeeList component displays a list of employees and provides options to edit or delete each employee.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.onEdit - Callback function to handle editing an employee. 
 *                                   It receives the employee object as an argument.
 *
 * @returns {JSX.Element} The rendered EmployeeList component.
 */
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