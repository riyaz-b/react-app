import React, { useState, useEffect, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';


const EmployeeForm = ({ selectedEmployee, setSelectedEmployee }) => {
    const { addEmployee, updateEmployee } = useContext(EmployeeContext);
    const [formData, setFormData] = useState({ id: '', name: '', tech: '' });

    useEffect(() => {
        if (selectedEmployee) {
            setFormData(selectedEmployee);
        } else {
            setFormData({ id: '', name: '', tech: '' });
        }
    }, [selectedEmployee]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedEmployee) {
            updateEmployee(selectedEmployee.id, formData);
        } else {
            addEmployee(formData);
        }
        setSelectedEmployee(null);
        setFormData({ id: '', name: '', tech: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Technology"
                value={formData.tech}
                onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
            />
            <button type="submit">{selectedEmployee ? 'Update' : 'Add'} Employee</button>
        </form>
    );
};

export default EmployeeForm;