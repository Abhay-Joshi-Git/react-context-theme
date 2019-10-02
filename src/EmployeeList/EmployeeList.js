import React, { useState, useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { getThemeDetailsByType } from '../theme/theme-model';
import './Employee.css'

const employeesData = [
    {
        name: 'Pete',
        department: 'engineering'
    },
    {
        name: 'Suzan',
        department: 'Sales'
    }
];

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
    const { theme }  = useContext(ThemeContext);
    const themeDetails = getThemeDetailsByType(theme.activeTheme);
    return (
        <>
            <h2>Employees List</h2>
            <ul class="list-container">
                {
                    employees.length
                    ? (
                        employees.map(emp => (<Employee data={emp} key={emp.name} themeDetails={themeDetails} />))
                    )
                    : null
                }
            </ul>
            <div style={ {  marginTop: '50px' }}>
                <button
                    onClick={() => setEmployees(employeesData)}
                    style={{ backgroundColor: themeDetails.primaryBgColor, color: themeDetails.primaryColor, minHeight: '2.5rem', minWidth: '4rem', fontSize: '1.15rem' }}
                >Add</button>
            </div>
        </>
    );
}
