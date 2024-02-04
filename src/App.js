import { Routes,Route } from 'react-router-dom';
import './App.css';


import Layout from './Layout';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

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
