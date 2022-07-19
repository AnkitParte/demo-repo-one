import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './components/Theme';
//import {theme} from "./components/Theme"

function App() {
  const {theme} = useContext(ThemeContext);
  console.log({email:"eve.holt@reqres.in",password:"cityslicka"})
  return (
    <div className="App" style={theme}>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
