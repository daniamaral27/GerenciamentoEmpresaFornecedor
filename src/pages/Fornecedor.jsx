import { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import { Table } from "react-bootstrap";
import axios from "axios";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate} from 'react-router';

function Fornecedor(props){
    
    const navigate = useNavigate();
    const [fornecedores, setFornecedores] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/fornecedor").then((response) => {
            console.log(response.data);
            setFornecedores(response.data);
        });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/fornecedor/${searchId}`).then((response) => {
            console.log(response.data);
            setSearchResult(response.data);
        });
    }

    // Função pra deletar por ID
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/fornecedor/${id}`).then((response) => {
        console.log(response.data);
        // Atualiza a lista de Fornecedores após a exclusão
        setFornecedores(fornecedores.filter((fornecedor) => fornecedor.id !== id));
        // Limpa o resultado da busca
        setSearchResult(null);
    });
  };

  function handleUpdate(id) {
    navigate(`/fornecedor/${id}`);
  }

    return(
        <div>
            <Header/>
            <div>
                <form className='find' onSubmit={handleSearch}>
                    <label htmlFor="searchId">BUSCAR POR ID:</label>
                    <input type="text" id="searchId" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                    <button className='button' type="submit">BUSCAR</button>
                </form>
            </div>
            <div className='table'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CNPJ/CPF</th>
                            <th>RG</th>
                            <th>CEP</th>
                            <th>Data Nascimento</th>
                            <th>Email</th>
                            
                            <th>Deletar</th>
                            <th>Atualizar</th>

                        </tr>
                    </thead>
                    <tbody>
                        {searchResult ? (
                            <tr>
                                <td>{searchResult.id}</td>
                                <td>{searchResult.nome}</td>
                                <td>{searchResult.cnpj_cpf}</td>
                                <td>{searchResult.rg}</td>
                                <td>{searchResult.cep}</td>
                                <td>{searchResult.data_nascimento}</td>
                                <td>{searchResult.email}</td>
                                
                                <td>
                                    <FaTrash onClick={() => handleDelete(searchResult.id)}>Excluir</FaTrash>
                                </td> 
                                <td> 
                                    <FaEdit onClick={() => handleUpdate(searchResult.id)}>Editar</FaEdit>
                                </td>
                            </tr>
                        ) : (
                            fornecedores.map((fornecedor) => (
                                <tr key={fornecedor.id}>
                                    <td>{fornecedor.id}</td>
                                    <td>{fornecedor.nome}</td>
                                    <td>{fornecedor.cnpj_cpf}</td>
                                    <td>{fornecedor.rg}</td>
                                    <td>{fornecedor.cep}</td>
                                    <td>{fornecedor.data_nascimento}</td>
                                    <td>{fornecedor.email}</td>
                                    
                                    <td>
                                        <FaTrash onClick={() => handleDelete(fornecedor.id)}>Excluir</FaTrash>
                                    </td> 
                                    <td> 
                                        <FaEdit onClick={() => handleUpdate(fornecedor.id)}>Editar</FaEdit>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
            
            <Footer/>
        </div>
    );
}
export default Fornecedor;