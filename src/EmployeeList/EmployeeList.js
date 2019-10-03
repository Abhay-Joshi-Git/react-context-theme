import React, { useState, useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { getThemeDetailsByType } from '../theme/theme-model';
import './Employee.css';
import { Modal } from '../sharable/Modal';
import { employeesData } from './Employee-data';
import EmployeeForm from './employee-form/EmployeeForm';

const Employee = ({ data, themeDetails }) => (
    <li className="list-item"
        style={{ backgroundColor: themeDetails.secondaryBgColor, color: themeDetails.secondaryColor, boxShadow: themeDetails.secondaryBoxShadow }}
    >
        <div><strong>Name:</strong> {data.name}</div>
        <div><strong>Department:</strong> {data.department}</div>
    </li>
)

export default () => {
    const [ employees, setEmployees ] = useState(employeesData);
    const [ showModal, setShowModal ] = useState(false);
    const { theme }  = useContext(ThemeContext);
    const themeDetails = getThemeDetailsByType(theme.activeTheme);

    const toggleModal = () => setShowModal(!showModal);

    return (
        <>
            <h2>Employees List</h2>
            <ul className="list-container">
                {
                    employees.length
                    ? (
                        employees.map(emp => (<Employee data={emp} key={emp.name} themeDetails={themeDetails} />))
                    )
                    : null
                }
            </ul>
            {
                showModal
                ? <Modal>
                    <EmployeeForm
                        header="Add Employee"
                        onSubmit={({name, department}) => {
                            toggleModal();
                            setEmployees([
                                ...employees,
                                {
                                    name,
                                    department
                                }
                            ])
                        }}
                        onCancel={toggleModal}
                    />
                  </Modal>
                : null
            }
            <div style={ {  marginTop: '50px' }}>
                <button
                    onClick={toggleModal}
                    className="button"
                    style={{ backgroundColor: themeDetails.primaryBgColor, color: themeDetails.primaryColor }}
                >Add</button>
            </div>
        </>
    );
}
