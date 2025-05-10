import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', tech: 'React' },
        { id: 2, name: 'Jane Smith', tech: 'Node.js' },
    ]);

    const addEmployee = (employee) => {
        setEmployees([...employees, { ...employee, id: Date.now() }]);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(emp => (emp.id === id ? updatedEmployee : emp)));
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};