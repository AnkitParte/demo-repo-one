import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './Navbar';
import { useContext } from 'react';
import { ThemeContext } from './Theme';
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
