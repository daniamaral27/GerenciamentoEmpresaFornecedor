import React from 'react';
import './App.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Fornecedor from './pages/Fornecedor';
import FormularioEmpresa from './components/formularios/formularioEmpresa';
import formularioFornecedor from "./components/formularios/formularioFornecedor";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import formEmpresa from "./pages/formEmpresa";
import formFornecedor from './pages/formFornecedor';

function App() {
 return(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Empresa' element={<Empresa/>}/>
        <Route path='/Fornecedor' element={<Fornecedor/>}/> 
        <Route path='/formempresa' element={<FormularioEmpresa/>}/> 
        <Route path='/formfornecedor' element={<formularioFornecedor/>}/> 
        <Route path='/Empresa/:id' element={<formEmpresa/>}/>
        <Route path='/Fornecedor/:id' element={<formFornecedor/>}/>
      </Routes>
      </BrowserRouter>
    )
}
export default App;



   
 

