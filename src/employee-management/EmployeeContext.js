import React, { createContext, useState } from 'react';

// Create the EmployeeContext to provide employee-related data and functions
export const EmployeeContext = createContext();

/**
 * EmployeeProvider Component
 * This component wraps its children with the EmployeeContext.Provider
 * to provide access to employee data and CRUD operations.
 *
 * @param {React.ReactNode} children - The child components that will consume the context.
 */
export const EmployeeProvider = ({ children }) => {
    // State to hold the list of employees
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', tech: 'React' },
        { id: 2, name: 'Jane Smith', tech: 'Node.js' },
    ]);

    /**
     * Add a new employee to the list.
     * @param {Object} employee - The employee object to add (should include `name` and `tech`).
     */
    const addEmployee = (employee) => {
        setEmployees([...employees, { ...employee, id: Date.now() }]);
    };

    /**
     * Update an existing employee's details.
     * @param {number} id - The ID of the employee to update.
     * @param {Object} updatedEmployee - The updated employee object.
     */
    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(emp => (emp.id === id ? updatedEmployee : emp)));
    };

    /**
     * Delete an employee from the list.
     * @param {number} id - The ID of the employee to delete.
     */
    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    return (
        // Provide the employee data and CRUD functions to the context consumers
        <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};