import React, { useState } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import EmployeeList from './EmployeeList/EmployeeList';
import ThemeContext from './theme/ThemeContext';
import { defaultTheme, themeType } from './theme/theme-model';

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <div className={"App " + (theme.activeTheme === themeType.dark ? 'dark-theme' : 'light-theme') } >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <header className="App-header">
          <Toolbar />
        </header>
        <EmployeeList />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
