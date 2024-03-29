import { Routes,Route } from 'react-router-dom';
import './App.css';
import axios from "axios";


import Layout from './Layout';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout/>}>
        <Route path = "/" element = {<IndexPage/>}/>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/register" element = {<RegisterPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
