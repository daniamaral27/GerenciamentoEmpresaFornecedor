import { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import { Table } from "react-bootstrap";
import axios from "axios";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router';


function Empresa(props) {
  const navigate = useNavigate();
  const [empresas, setEmpresas] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/empresa").then((response) => {
      console.log(response.data); // adicionando um log aqui
      setEmpresas(response.data);
    });
  }, []);


  // Função de Buscar por ID
  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/empresa/${searchId}`).then((response) => {
      console.log(response.data);
      setSearchResult(response.data);
    });
  }

  // Função pra deletar por ID
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/empresa/${id}`).then((response) => {
      console.log(response.data);
      // Atualiza a lista de empresas após a exclusão
      setEmpresas(empresas.filter((empresa) => empresa.id !== id));
      // Limpa o resultado da busca
      setSearchResult(null);
    });
  };
  
  function handleUpdate(id) {
    navigate(`/empresa/${id}`);
  }
  
  return (
    <div>
      <Header />
      <div>
        <form className='find' onSubmit={handleSearch}>
          <label htmlFor="searchId">BUSCAR POR ID:</label>
          <input type="text" id="searchId" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
          <button className='button' type="submit">BUSCAR</button>
        </form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome Fantasia</th>
            <th>CNPJ</th>
            <th>CEP</th>
            <th>Estado</th>
            <th>Deletar</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          {searchResult ? (
            <tr>
              <td>{searchResult.id}</td>
              <td>{searchResult.nome_fantasia}</td>
              <td>{searchResult.cnpj}</td>
              <td>{searchResult.cep}</td>
              <td>{searchResult.estado}</td>
              <td>
                <FaTrash onClick={() => handleDelete(searchResult.id)}>Excluir</FaTrash>
              </td> 
              <td> 
                <FaEdit onClick={() => handleUpdate(searchResult.id)}>Editar</FaEdit>
              </td>
            </tr>
          ) : (
            empresas.map((empresa) => (
              <tr key={empresa.id}>
                <td>{empresa.id}</td>
                <td>{empresa.nome_fantasia}</td>
                <td>{empresa.cnpj}</td>
                <td>{empresa.cep}</td>
                <td>{empresa.estado}</td>
                <td>
                  <FaTrash onClick={() => handleDelete(empresa.id)}>Excluir</FaTrash>
                </td>
                <td>
                  <FaEdit onClick={() => handleUpdate(empresa.id)}>Editar</FaEdit>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}

export default Empresa;






