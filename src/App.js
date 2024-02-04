import { Routes,Route } from 'react-router-dom';
import './App.css';


import Layout from './Layout';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout/>}>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/" element = {<IndexPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
