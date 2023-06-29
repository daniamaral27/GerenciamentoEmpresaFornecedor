import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


function UpdateEmpresa(props) {
  
  const navigate = useNavigate();
  const [nome_fantasia, setNome_fantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/empresa/${id}`)
      .then((response) => {
        setNome_fantasia(response.data.nome_fantasia);
        setCnpj(response.data.cnpj);
        setCep(response.data.cep);
        setEstado(response.data.estado);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  function handleSubmit(event) {
    event.preventDefault();
    const novosDados = {
    nome_fantasia: nome_fantasia,
    cnpj: cnpj,
    cep: cep,
    estado: estado,
  };
    axios
      .put(`http://localhost:8080/empresa/${id}`, novosDados)
      .then(response => {
        navigate('/empresa');
      })
      .catch(error => {
        console.log(error);
      });
  }
   

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Atualizar Empresa</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >Nome Fantasia:</label>
            <input type="text" className="form-control" id="nome_fantasia" value={nome_fantasia} onChange={(e) => setNome_fantasia(e.target.value)} required />
          </div>
          <div className="form-group">
            <label >CNPJ:</label>
            <input type="text" className="form-control" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>CEP:</label>
            <input type="text" className="form-control" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} required />
          </div>
          <div className="form-group">
            <label >Estado:</label>
            <input type="text" className="form-control" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">
            Atualizar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateEmpresa;