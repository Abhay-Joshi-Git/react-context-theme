import { createContext } from 'react';
import { defaultTheme } from './theme-model';

export default createContext({ theme: defaultTheme, setTheme: () => {} });
