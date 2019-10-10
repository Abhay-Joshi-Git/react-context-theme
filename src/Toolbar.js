import React, { useContext } from 'react';
import ThemeContext from './theme/ThemeContext';
import { getThemeDetailsByType, availableTheme } from './theme/theme-model';

const toolBarStyle = {
	position: "fixed",
	top: 0,
	left: 0,
	height: "3rem",
	width: "100%",
    display: 'flex',
    alignItems: 'center'
};

const themeSelectStyle = {
    marginRight: '6rem',
    marginTop: '3px',
    marginBottom: '3px',
    minHeight: '2rem',
    fontSize: '1.15rem'
};

export default React.memo(({ theme: themeProp }) => {
    console.log('rendering toolbar......');
    const { theme, setTheme }  = useContext(ThemeContext);
    const themeDetails = getThemeDetailsByType(theme.activeTheme);

    return (
        <div style={{ ...toolBarStyle, backgroundColor: themeDetails.secondaryBgColor, color: themeDetails.secondaryColor }}>
            <label htmlFor="theme-select" style={{  marginLeft: 'auto', marginRight: '2rem' }}> Theme </label>
            <select
                id="theme-select"
                value={theme.activeTheme}
                style={ { ...themeSelectStyle, backgroundColor: themeDetails.primaryBgColor, color: themeDetails.primaryColor, border: 'none' } }
                onChange={(e) => setTheme({ ...theme, activeTheme: +e.target.value })}
            >
                {availableTheme.map(t => (<option value={t.value} key={t.value}>{t.displayName}</option>))}
            </select>
        </div>
    );
})
