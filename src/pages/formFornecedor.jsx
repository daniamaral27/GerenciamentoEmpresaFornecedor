import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

function UpdateFornecedor(props) {

  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [cnpj_cpf, setCnpj_cpf] = useState("");
  const [rg, setRg] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [id_empresa, setId_empresa] = useState("");
  const [tipo_pessoa, setTipo_pessoa] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/fornecedor/${id}`)
      .then((response) => {
        setNome(response.data.nome);
        setCnpj_cpf(response.data.cnpj_cpf);
        setRg(response.data.rg);
        setData_nascimento(response.data.data_nascimento);
        setEmail(response.data.email);
        setCep(response.data.cep);
        setId_empresa(response.data.id_empresa);
        setTipo_pessoa(response.data.tipo_pessoa);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  function handleSubmit(event) {
    event.preventDefault();
    const novosDados = {
    nome: nome,
    cnpj_cpf: cnpj_cpf,
    cep: cep,
    email: email,
    rg: rg,
    data_nascimento: data_nascimento,
    tipo_pessoa: tipo_pessoa,

  };
    axios
      .put(`http://localhost:8080/fornecedor/${id}`, novosDados)
      .then(response => {
        navigate('/fornecedor');
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <h2>Atualizar Fornecedor</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >Nome:</label>
            <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="form-group">
            <label >CNPJ/CPF:</label>
            <input type="text" className="form-control" id="cnpj" value={cnpj_cpf} onChange={(e) => setCnpj_cpf(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>RG:</label>
            <input type="text" className="form-control" id="rg" value={rg} onChange={(e) => setRg(e.target.value)} required />
          </div>
          <div className="form-group">
            <label >CEP:</label>
            <input type="text" className="form-control" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} required />
          </div>
          <div className="form-group">
            <label >Data de Nascimento:</label>
            <input type="text" className="form-control" id="data_nascimento" value={data_nascimento} onChange={(e) => setData_nascimento(e.target.value)} required />
          </div>
          <div className="form-group">
            <label >Email:</label>
            <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          /* <div className="form-group">
            <label >Id Empresa:</label>
            <input type="text" className="form-control" id="id_empresa" value={id_empresa} onChange={(e) => setId_empresa(e.target.value)} required />
          </div>
          <div className="form-group">
            <label >Tipo de Pessoa:</label>
            <input type="text" className="form-control" id="tipo_pessoa" value={tipo_pessoa} onChange={(e) => setTipo_pessoa(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">
            Atualizar
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default UpdateFornecedor;