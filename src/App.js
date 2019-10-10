import React, { useState, useContext } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import EmployeeList from './EmployeeList/EmployeeList';
import ThemeContext from './theme/ThemeContext';
import { defaultTheme, themeType } from './theme/theme-model';

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [footer, setFooter] = useState('test');

  return (
    <div className={"App " + (theme.activeTheme === themeType.dark ? 'dark-theme' : 'light-theme') } >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <TBar theme={theme} />
        <header className="App-header">
          <Toolbar theme={theme}/>
        </header>
        <DummyComp theme={theme} />
        <EmployeeList />
        <div>
          {footer}
          <p>
            <button onClick={() => setFooter('changed')}>Change Footer</button>
          </p>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;


const DummyComp = React.memo(({ theme }) => {
  console.log('in dummy comp....');
  return <div>dummy comp</div>
});


const TBar = React.memo(({ theme: t }) => {
  console.log('T bar......');
  // if we uncomment line below, TBar gets rendered on footer change as well.
  // const { theme, setTheme }  = useContext(ThemeContext);

  return (
      <div>
          <label htmlFor="theme-select" style={{  marginLeft: 'auto', marginRight: '2rem' }}> Theme Bar </label>
      </div>
  );
})
