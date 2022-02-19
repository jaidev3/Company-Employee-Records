import './App.css';
import './components/navbar'
import Navbar from './components/navbar';
import List from './components/List';
import Login from './components/login';
import Home from './components/home';
import User from './components/userDetail';
import {Routes,Route} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
       <h1>Hello World</h1>
       <Navbar></Navbar>
       <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="list" element={<List></List>}></Route>
    <Route path="login" element={<Login></Login>}></Route>
    <Route path="list/:id" element={<User></User>}></Route>
       </Routes>
       
    
    </div>
  );
}

export default App;
