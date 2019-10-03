import React, { useState, useContext } from 'react';
import { departments } from '../Employee-data';
import ThemeContext from '../../theme/ThemeContext';
import { getThemeDetailsByType, themeType } from '../../theme/theme-model';
import './EmployeeForm.css';

const formButtonStyle = { minHeight: '2.5rem', minWidth: '4rem', fontSize: '1.15rem' }

export default function EmployeeForm({ header, onSubmit, onCancel }) {
    const [ name, setName ] = useState('');
    const [ department, setDepartment ] = useState((departments && departments[0]) || '');
    const { theme }  = useContext(ThemeContext);
    const themeDetails = getThemeDetailsByType(theme.activeTheme);

    const colorThemeStyle = {
        backgroundColor: theme.activeTheme === themeType.dark
            ? '#282c34'
            : 'white',
        color: theme.activeTheme === themeType.dark
            ? 'white'
            : '#282c34',
    };

    const inputStyle = {
        ...colorThemeStyle,
        borderColor: 'lightgrey'
    }


    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name,
            department
        });
    }

    return (
        <section className="emp-form-container" style={colorThemeStyle}>
            <h2 className="header">{header}</h2>
            <form onSubmit={onFormSubmit}>
                <fieldset className="fields-container">
                    <div>
                        <input
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Name"
                            className="form-input"
                            style={inputStyle}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <select
                            id="dept"
                            name="dept"
                            value={department}
                            placeholder="Department"
                            className="form-input"
                            style={inputStyle}
                            onChange={e => setDepartment(e.target.value)}
                        >
                            {departments.map(d => (
                                <option value={d} key={d}>{d}</option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <div className="button-container">
                    <button
                        className="button"
                        onClick={onCancel}
                        style={{ backgroundColor: themeDetails.secondaryBgColor, color: themeDetails.secondaryColor, ...formButtonStyle }}
                    >
                        Close
                    </button>
                    <input
                        className="button"
                        type="submit"
                        value="Submit"
                        style={{ backgroundColor: themeDetails.primaryBgColor, color: themeDetails.primaryColor, marginLeft: 'auto', ...formButtonStyle }}
                    />
                </div>
            </form>
        </section>
    )
}
